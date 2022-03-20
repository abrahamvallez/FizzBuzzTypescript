
export const fizzBuzz = (inputNumber: number): string => {
    let stringOutput: string
    if ((inputNumber % 3) == 0) {
        stringOutput = 'Fizz'
    } else if ((inputNumber % 5) == 0) {
        stringOutput = 'Buzz'
    } else stringOutput = inputNumber.toString()

    return stringOutput
}
