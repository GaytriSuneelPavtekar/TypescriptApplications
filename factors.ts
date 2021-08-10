/* 3. Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.
Input : 20
Output : 1 2 4 5 10 */

let i: number = 0;

function displayFactors(inputNumber:number) {
    for(i=0;i<inputNumber;i++) {
        if(inputNumber%i==0){
            console.log(i);
        }
    }
}

displayFactors(20);