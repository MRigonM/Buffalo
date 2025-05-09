import fs from 'fs';
import path from 'path';

export async function loadCodesFromCSV(codeListName) {
  const filePath = path.join(process.cwd(), 'data', 'codes', codeListName); // no `.csv` here

  if (!fs.existsSync(filePath)) {
    console.warn(`⛔ Code list file not found: ${filePath}`);
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
}