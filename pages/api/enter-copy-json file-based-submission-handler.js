// pages/api/enter.js
import fs from 'fs';
import path from 'path';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { fullName, email, phone, date_of_birth, version, source, source_other, optIn } = req.body;
  if (!firstName || !lastName || !email || !phone) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const file = path.join(process.cwd(), 'entries.json');
  const entries = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : [];

  entries.push({
    fullName,
    email,
    phone,
    date_of_birth,
    version,
    source,
    source_other,
    optedIn: !!optIn,
    submittedAt: new Date().toISOString(),
  });

  fs.writeFileSync(file, JSON.stringify(entries, null, 2));
  return res.status(200).json({ message: 'Entry received' });
}