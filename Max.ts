/* 1. Write a typescript program which contains one function named as Maximum.
That function accepts three parameters and it should returns largest value from three input parameters.
Input : 23 89 6
Output : Maximum number is 89 */
let max, ret: number = 0;
function maximum(a, b, c) {
    max = a;
    if (a < b && b > c) {
        max = b;
    }
    if (a < c) {
        max = c;
    }
    return max;
}
ret = maximum(23, 89, 6);
console.log("Maximum number is", ret);