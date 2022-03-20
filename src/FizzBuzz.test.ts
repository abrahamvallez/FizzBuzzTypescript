import { fizzBuzz } from './FizzBuzz'

describe('FizzBuzz should', () => {
  
  it.each([[1,'1'], [2,'2'], [4,'4']])
  ('should return the string representation of the input number', (inputNumber: number, stringOutput: string) => {
    expect(fizzBuzz(inputNumber)).toBe(stringOutput)
  })
})
