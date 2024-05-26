import { generateRow } from './helpers/generateNumbers';

const totalRowsToGenerate = 2;
const rows: Record<string, number>[][] = [];

for (let i = 0; i < totalRowsToGenerate; i++) {
  const row = generateRow();
  rows.push(row);
}