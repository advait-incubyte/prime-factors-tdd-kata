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
})