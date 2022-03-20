import { fizzBuzz } from './FizzBuzz'

describe('FizzBuzz should', () => {
  it('should return 1 when input is 1', () => {
    expect(fizzBuzz(1)).toBe('1')
  })
})
