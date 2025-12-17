import fs from 'fs';
import path from 'path';

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  return data;
};

const parseJSON = (filepath) => {
  const rawData = readFile(filepath);
  const parsed = JSON.parse(rawData);
  return parsed;
};

export default parseJSON;
