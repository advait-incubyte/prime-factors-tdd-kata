export const primeFactors = (number: number) : number[] => {
    const factors: number[] = [];
    let remainder = number;

    if (remainder == 1)
        return factors;
 
    if (remainder % 2 == 0) {
        factors.push(2);
        remainder /= 2;
    }
    
    if (remainder > 1)
        factors.push(remainder);

    return factors;
}