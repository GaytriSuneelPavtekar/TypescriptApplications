/*1. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum number is 89 */

let arr: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
let max: number = 0;
let i: number = 0;

function maximum(arr: number[]) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
let ret = maximum(arr);
console.log("Maximum number from an array is:", ret);