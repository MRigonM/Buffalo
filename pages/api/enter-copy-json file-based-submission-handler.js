// pages/api/enter.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { firstName, lastName, email, source, uniqueCode, version, optIn } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const file = path.join(process.cwd(), 'entries.json');
  const entries = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : [];

  entries.push({
    firstName,
    lastName,
    email,
    source: source || null,
    uniqueCode: uniqueCode || null,
    version,
    optedIn: !!optIn,
    submittedAt: new Date().toISOString(),
  });

  fs.writeFileSync(file, JSON.stringify(entries, null, 2));
  return res.status(200).json({ message: 'Entry received' });
}