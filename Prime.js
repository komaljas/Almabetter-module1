/*Write a JavaScript function findPrimes that takes a positive integer n as
 input and returns an array of prime numbers less than or equal to n.*/

function findPrimes(n) {
    const primes = [];

    for (let num = 2; num <= n; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}

console.log(findPrimes(20));
    
