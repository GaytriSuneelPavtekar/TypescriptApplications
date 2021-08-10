/*3. Write a typescript program which contains one function named as Maximum.
That function accepts array of numbers and returns the second largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Second Maximum number is 77 */

let arr: number[] = [23, 89, 6, 29, 56, 45, 77, 100, 99];
let i: number = 0;
let firstLargestNumber: number = 0;
let secondLargestNumber: number = 0;
let max: number = 0;
let max2: number= 0;

function maximum(arr: number[]): number {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            firstLargestNumber = arr[i];
            if (max < firstLargestNumber) {
                max = firstLargestNumber;//100
            }
        } else {
            firstLargestNumber = arr[i + 1];
            if (max < firstLargestNumber) {
                max = firstLargestNumber;//100
            }
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != max) {
            if (arr[i] > arr[i + 1]) {77 100
                secondLargestNumber = arr[i];//89
                if (max2 < secondLargestNumber && secondLargestNumber!= max ) {
                    max2 = secondLargestNumber;//100
                }
            }else{
                secondLargestNumber = arr[i+1];//100
                if (max2 < secondLargestNumber && secondLargestNumber!=max) {
                    max2 = secondLargestNumber;//100
                }
            }
        }

    }
    return max2;
}

let ret: number = maximum(arr);
console.log('Second largest number:', ret);