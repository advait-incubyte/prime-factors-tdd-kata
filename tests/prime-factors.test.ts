import { expect, it, describe } from 'vitest';
import { primeFactors } from '../src/prime-factors';

describe('Prime Factors', () => {
    it('should be defined', () => {
        expect(primeFactors).toBeDefined();
    })

    it('should return an empty array for 1', () => {
        expect(primeFactors(1)).toEqual([]);
    })

    it('should return [2] for 2', () => {
        expect(primeFactors(2)).toEqual([2]);
    })

    it('should return [3] for 3', () => {
        expect(primeFactors(3)).toEqual([3]);
    })

    it('should return [2, 2] for 4', () => {
        expect(primeFactors(4)).toEqual([2, 2]);
    })

    it('should return [5] for 5', () => {
        expect(primeFactors(5)).toEqual([5]);
    })

    it('should return [2, 3] for 6', () => {
        expect(primeFactors(6)).toEqual([2, 3]);
    })

    it('should return [7] for 7', () => {
        expect(primeFactors(7)).toEqual([7]);
    })

    it('should return [2, 2, 2] for 8', () => {
        expect(primeFactors(8)).toEqual([2, 2, 2]);
    })

    it('should return [3, 3] for 9', () => {
        expect(primeFactors(9)).toEqual([3, 3]);
    })

    it('should handle factors numbers > 9, say: 2 * 2 * 3 * 3 * 5 * 7 * 8 * 11 * 13', () => {
        expect(primeFactors(2 * 2 * 3 * 3 * 5 * 7 * 11 * 13))
            .toEqual([2, 2, 3, 3, 5, 7, 11, 13]);
    })
})