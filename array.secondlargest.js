/*3. Write a typescript program which contains one function named as Maximum.
That function accepts array of numbers and returns the second largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Second Maximum number is 77 */
var arr = [23, 89, 6, 29, 56, 45, 77, 100, 99];
var i = 0;
var firstLargestNumber = 0;
var secondLargestNumber = 0;
var max = 0;
var max2 = 0;
function maximum(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            firstLargestNumber = arr[i];
            if (max < firstLargestNumber) {
                max = firstLargestNumber; //100
            }
        }
        else {
            firstLargestNumber = arr[i + 1];
            if (max < firstLargestNumber) {
                max = firstLargestNumber; //100
            }
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != max) {
            if (arr[i] > arr[i + 1]) {
                secondLargestNumber = arr[i]; //89
                if (max2 < secondLargestNumber && secondLargestNumber != max) {
                    max2 = secondLargestNumber; //100
                }
            }
            else {
                secondLargestNumber = arr[i + 1]; //89
                if (max2 < secondLargestNumber && secondLargestNumber != max) {
                    max2 = secondLargestNumber; //100
                }
            }
        }
    }
    return max2;
}
var ret = maximum(arr);
console.log('Second largest number:', ret);
