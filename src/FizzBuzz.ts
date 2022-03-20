
export const fizzBuzz = (inputNumber: number): string => {
    let stringOutput: string = ''

    if ((inputNumber % 3) == 0) {
        stringOutput = 'Fizz'
    }
    if ((inputNumber % 5) == 0) {
        stringOutput += 'Buzz'
    }
    if ((stringOutput.length == 0)) {
        stringOutput = inputNumber.toString()
    }

    return stringOutput
}
