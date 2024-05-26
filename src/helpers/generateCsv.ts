import { json2csv } from 'json-2-csv'
import fs from 'node:fs'
import path from 'node:path'

export const generateCsvStr = (data: any): string => {
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
  }

  fs.writeFileSync(path.join(directory, 'dataset.csv'), data)
}
