import { COLUMN_NAMES } from "../constants";

/**
 * Generates a random number between the specified minimum and maximum values.
 * 
 * @param min - The minimum value of the range (inclusive).
 * @param max - The maximum value of the range (inclusive).
 * @returns A random number between the specified minimum and maximum values.
 */
export const generateNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generates a row of records with random numbers.
 * @returns An array of records, where each record is a key-value pair of string and number.
 */
export const generateRow = (): Record<string, number>[] => {
  const row: Record<string, number>[] = [];
  for (let i = 0; i < 21; i++) {
    const value = generateNumber(0, 4);
    const keyCsv = COLUMN_NAMES[i];
    const data = { [keyCsv]: value };
    row.push(data);
  }
  return row;
}