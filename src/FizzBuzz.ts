
export const fizzBuzz = (inputNumber: number): string => {
    let stringOutput: string
    ((inputNumber % 3) == 0) ? stringOutput = 'Fizz' : stringOutput = inputNumber.toString()
    return stringOutput
}
