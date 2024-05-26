import { COLUMN_NAMES } from '../constants'

/**
 * Generates a random number between the specified minimum and maximum values.
 *
 * @param min - The minimum value of the range (inclusive).
 * @param max - The maximum value of the range (inclusive).
 * @returns A random number between the specified minimum and maximum values.
 */
export const generateNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Generates a row of records with random numbers.
 * @returns An array of records, where each record is a key-value pair of string and number.
 */
export const generateRow = (): Array<Record<string, number>> => {
  const row: Array<Record<string, number>> = []
  const valuesList = []
  for (let i = 0; i < 21; i++) {
    const value = generateNumber(0, 4)
    valuesList.push(value)
    const keyCsv = COLUMN_NAMES[i]
    const data = { [keyCsv]: value }
    row.push(data)
  }
  const definedClass = defineClass(valuesList)
  row.push({ Class: definedClass })
  return row
}

/**
 * Defines the class based on the total value of an array of numbers.
 * @param row - The array of numbers.
 * @returns The class value (0, 1, or 2) based on the total value of the array.
 */
export const defineClass = (row: number[]): number => {
  const total = row.reduce((acc, curr) => acc + curr, 0)
  // Maximum total value is 84 so we can divide it into 3 classes
  if (total <= 28) {
    return 0
  } else if (total <= 56) {
    return 1
  } else {
    return 2
  }
}
