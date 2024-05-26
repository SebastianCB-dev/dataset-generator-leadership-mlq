import { generateCsvStr, createCsvFile } from './helpers'
import { generateRow } from './helpers/generateNumbers'
import colors from 'colors'

const TOTAL_ROWS_TO_GENERATE = 40000
const SHOULD_CLASSES_BE_EQUAL = true
const rows: Array<Array<Record<string, number>>> = []

// Strategy to generate equal classes
if (SHOULD_CLASSES_BE_EQUAL) {
  let classToGenerate: number = 0
  for (let i = 0; i < TOTAL_ROWS_TO_GENERATE; i++) {
    let row = []
    do {
      row = generateRow()
    } while (row[row.length - 1].Class !== classToGenerate)
    classToGenerate === 2 ? classToGenerate = 0 : classToGenerate++
    rows.push(row)
  }
} else {
  for (let i = 0; i < TOTAL_ROWS_TO_GENERATE; i++) {
    const row = generateRow()
    rows.push(row)
  }
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
