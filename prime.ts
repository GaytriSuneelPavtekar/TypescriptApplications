/*4. Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input : 11
Output : It is prime number */

let isPrime: boolean = true;
let i: number = 0;
function checkPrime(inputNumber: number) {
    for (i = 2; i < inputNumber; i++) {
        if (inputNumber % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log('It is a prime number');
    else console.log('It is not a prime number');
}
checkPrime(11);