/*2. Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.
Input : 23 6 7 4 5 7
Output : Addition is 52 */

let arr: number[] = [23, 6, 7, 4, 5, 7];
let i: number = 0;
let sum: number = 0;

function summation(arr:number[]): number {
    for (i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    return sum;
}

let ret: number = summation(arr);
console.log('Sum of an array elements:', ret);