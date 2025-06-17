export const primeFactors = (number: number) : number[] => {
    const factors: number[] = [];
    let remainder = number;

    if (remainder == 1)
        return factors;
 
    let divisor = 2;
    do {
        while (remainder % divisor == 0) {
            factors.push(divisor);
            remainder /= divisor;
        }
        divisor++;
    } while (remainder > 1)

    return factors;
}