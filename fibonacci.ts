/*5. Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
Input : 21
Output : 1 1 2 3 5 8 13 21 */

let i: number = 0;
let no1: number = 0;
let no2: number = 1;
let no3: number = 0;

function fibonacci(inputNumber: number) {
    for (i = 0; i < inputNumber; i++) {
        console.log(no1);
        if (no1 === inputNumber) {
           break;
        }
        no3 = no1 + no2;
        no1 = no2;
        no2 = no3;
    }
}

fibonacci(21);