# Prime Factors TDD Kata
- Creating a function that finds prime factors of a given number, demonstrating Outside-In TDD in the process.

## Definitions
<ol>
    <li><strong>Prime number:</strong> a number divisible only by itself and one, such as 2, 3, 5, 7, 11, and so on</li>
    <li><strong>Prime factors:</strong> (of a number) the prime numbers that multiply together to equal that number</li>
</ol>

### Examples:
#### Example 1: Finding prime factors of 4

1. Is 4 divisible by 2? Yes, so 2 is a prime factor
2. Divide 4 by 2 to get 2
3. Since 2 is prime, the prime factors of 4 are [2, 2]

#### Example 2: Finding prime factors of 8

1. Is 8 divisible by 2? Yes
2. Divide 8 by 2 to get 4
3. Is 4 divisible by 2? Yes
4. Divide 4 by 2 to get 2
5. Since 2 is prime, the prime factors of 8 are [2, 2, 2]

### Inspiration
The three laws of TDD video, by Robert Martin: 
https://www.youtube.com/watch?v=qkblc5WRn-U

Implementing the above in NodeJS (vite + vitest)

### Steps:
1. Initial Commit and setup
2. Creating the test file, and writing a initial failing test to check for existence.
3. Wrote passing code for initial test case (empty function definition)