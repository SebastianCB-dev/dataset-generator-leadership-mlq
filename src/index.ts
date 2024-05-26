import { generateCsvStr, createCsvFile } from './helpers'
import { generateRow } from './helpers/generateNumbers'

const totalRowsToGenerate = 2
const rows: Array<Array<Record<string, number>>> = []

for (let i = 0; i < totalRowsToGenerate; i++) {
  const row = generateRow()
  rows.push(row)
}

const csvStr = generateCsvStr(rows)
createCsvFile(csvStr)
console.log('CSV file generated successfully!')
console.log('Check the output directory for the generated CSV file.')
