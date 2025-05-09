import { query } from '../../lib/db';
import { loadCodesFromCSV } from '../../lib/loadCodes';
import codeListMap from '../../lib/codeListMap';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const {
    theme,
    first_name,
    last_name,
    email,
    phone,
    source,
    unique_code,
    version,
    marketing_opt_in
  } = req.body;

  if (!theme) {
    return res.status(400).json({ message: 'Missing theme in request.' });
  }

  if (!first_name || !last_name || !email) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const cleanedCode = unique_code?.trim() || null;
  const normalizedTheme = theme.replace(/-/g, '_');
  const codeListName = codeListMap[normalizedTheme];

  try {
    // Unique code validation for form version 3 and 4
    if (['3', '4'].includes(version) && codeListName) {
      const allowedCodes = await loadCodesFromCSV(codeListName);

      if (!cleanedCode) {
        return res.status(400).json({ message: 'Unique Code is required.' });
      }

      if (!allowedCodes || !Array.isArray(allowedCodes)) {
        console.warn(`[API] Code list not found or invalid: ${codeListName}`);
        return res.status(400).json({ message: 'Code list not found for this campaign.' });
      }

      if (!allowedCodes.includes(cleanedCode)) {
        return res.status(400).json({ message: 'Invalid Unique Code.' });
      }

      const check = await query(
        'SELECT COUNT(*) FROM submissions WHERE unique_code = $1',
        [cleanedCode]
      );

      if (parseInt(check.rows[0].count, 10) > 0) {
        return res.status(409).json({ message: 'This Unique Code has already been used.' });
      }
    }

    // Phone format validation for version 4
    if (version === '4' && phone) {
      const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
      if (!phoneRegex.test(phone)) {
        return res.status(400).json({ message: 'Invalid phone number.' });
      }
    }

    // Insert the entry
    await query(
      `INSERT INTO submissions (
        first_name, last_name, email, phone, source,
        unique_code, marketing_opt_in
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        first_name,
        last_name,
        email,
        phone || null,
        source || null,
        cleanedCode,
        marketing_opt_in || 'NO'
      ]
    );

    res.status(200).json({ message: 'Entry saved to database.' });
  } catch (error) {
    console.error('DB error:', error);
    res.status(500).json({ message: 'Database error — please try again later.' });
  }
}