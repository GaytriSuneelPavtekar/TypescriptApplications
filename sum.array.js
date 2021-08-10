/*2. Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.
Input : 23 6 7 4 5 7
Output : Addition is 52 */
var arr = [23, 6, 7, 4, 5, 7];
var i = 0;
var sum = 0;
function summation(arr) {
    for (i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    return sum;
}
var ret = summation(arr);
console.log('Sum of an array elements:', ret);
