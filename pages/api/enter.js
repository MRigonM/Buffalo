import { query } from '../../lib/db';
import { loadCodesFromCSV } from '../../lib/loadCodes';
import codeListMap from '../../lib/codeListMap';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const {
    theme,
    full_name,
    email,
    phone,
    date_of_birth,
    version,
    source,
    source_other,
    marketing_opt_in,
  } = req.body;

  // if (!theme) {
  //   return res.status(400).json({ message: 'Missing theme in request.' });
  // }

  if (!theme || !full_name || !email || !phone) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const normalizedTheme = theme.replace(/-/g, '_');
  const codeListName = codeListMap[normalizedTheme];

  try {
    const recentEntryCheck = await query(
      `SELECT submitted_at FROM submissions WHERE email = $1 ORDER BY submitted_at DESC LIMIT 1`,
      [email]
    );

    if (recentEntryCheck.rows.length > 0) {
      const lastEntryDate = new Date(recentEntryCheck.rows[0].submitted_at);
      const now = new Date();
      const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));

      if (lastEntryDate > oneWeekAgo) {
        return res.status(409).json({ message: 'You can only enter once per week.' });
      }
    }

    if (['3', '4'].includes(version) && codeListName) {
      const allowedCodes = await loadCodesFromCSV(codeListName);

      if (!allowedCodes || !Array.isArray(allowedCodes)) {
        console.warn(`[API] Code list not found or invalid: ${codeListName}`);
        return res.status(400).json({ message: 'Code list not found for this campaign.' });
      }
    }

    // Phone format validation for version 4
    if (version === '4' && phone) {
      const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
      if (!phoneRegex.test(phone)) {
        return res.status(400).json({ message: 'Invalid phone number.' });
      }
    }

    if (source === 'Other, please specify' && !source_other) {
      return res.status(400).json({message: 'Please specify where you found us.'});
    }

    // Insert the entry
    await query(
      `INSERT INTO submissions (
            full_name, email, phone, date_of_birth, marketing_opt_in, source, source_other, submitted_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())`,
      [
        full_name,
        email,
        phone?.trim() === '' ? null : phone,
        date_of_birth || null,
        marketing_opt_in || 'NO',
        source || null,
        source_other || null
      ]
    );

    res.status(200).json({ message: 'Entry saved to database.' });
  } catch (error) {
    console.error('DB error:', error);
    res.status(500).json({ message: 'Database error — please try again later.' });
  }
}