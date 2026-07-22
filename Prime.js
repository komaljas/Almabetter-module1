/*Write a JavaScript function findPrimes that takes a positive integer n as
 input and returns an array of prime numbers less than or equal to n.*/
CODE TO WRITE
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
    
explaination: create a findprimes,& primes store all nos,then it start with 2 becz 2 is prime ,
 check if true then go to divisibliy by 2 & math sqaurerrot, if true then become 0 else false break
