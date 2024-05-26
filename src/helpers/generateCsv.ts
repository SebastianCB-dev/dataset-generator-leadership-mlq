import { json2csv } from 'json-2-csv'
import fs from 'node:fs'
import path from 'node:path'
import colors from 'colors'
/**
 * Generates a CSV string from the given data object.
 *
 * @param data - The data object to convert to CSV.
 * @returns The generated CSV string.
 */
export const generateCsvStr = (data: any): string => {
  console.log(colors.blue.bold('Generating CSV string...'))
  return json2csv(data, {
    emptyFieldValue: '',
    expandArrayObjects: true,
    unwindArrays: true
  })
}

/**
 * Creates a CSV file with the provided data.
 * @param data - The data to be written to the CSV file.
 */
export const createCsvFile = (data: any): void => {
  const directory = 'output'

  // Check if the directory exists, if not, create it
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  } else {
    // delete dataset.csv if it exists
    if (fs.existsSync(path.join(directory, 'dataset.csv'))) {
      fs.unlinkSync(path.join(directory, 'dataset.csv'))
    }
  }

  fs.writeFileSync(path.join(directory, 'dataset.csv'), data)
}
