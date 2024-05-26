import { generateCsvStr, createCsvFile } from './helpers'
import { generateRow } from './helpers/generateNumbers'
import colors from 'colors'

const totalRowsToGenerate = 50
const rows: Array<Array<Record<string, number>>> = []

for (let i = 0; i < totalRowsToGenerate; i++) {
  const row = generateRow()
  rows.push(row)
}

try {
  const csvStr = generateCsvStr(rows)
  createCsvFile(csvStr)
  console.log(colors.green.bold('CSV file generated successfully!'))
  console.log(colors.blue('Check the output directory for the dataset.csv file.'))
} catch (error) {
  console.error(colors.red('An error occurred while generating the CSV file.'))
  console.error(error)
}
