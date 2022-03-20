import { fizzBuzz } from './FizzBuzz'

describe('FizzBuzz should', () => {
  it('should return 1 when input is 1', () => {
    expect(fizzBuzz(1)).toBe('1')
  })

  it('should return 2 when input is 2', () => {
    expect(fizzBuzz(2)).toBe('2')
  })
})
