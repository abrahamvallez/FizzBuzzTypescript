
export const fizzBuzz = (inputNumber: number): string => {
    let stringOutput: string
    (inputNumber == 3) ? stringOutput = 'Fizz' : stringOutput = inputNumber.toString()
    return stringOutput
}
