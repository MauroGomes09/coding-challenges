function miniMaxSum(arr) {
    if(1 <= arr.length && arr.length <= 10**9){
        let sumTotal = arr.reduce((count, currentValue ) => {return count + currentValue}, 0);

        let minVal = Math.min(...arr);
        let maxVal = Math.max(...arr);

        let maxSum = sumTotal - minVal;
        let miniSum = sumTotal - maxVal;
         
        console.log(miniSum, maxSum);
    } else {
    console.log(`Array's size is incorrect, try again! Take care of the size, needs be between 1 <= arr[i] <= 10^9`);
    }
}
let arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);