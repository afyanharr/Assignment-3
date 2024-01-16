function isArithmeticProgression (numbers) {

    if (!Array.isArray(numbers)) {
        return "value is not array"
    }

    const distance = numbers[1] - numbers[0];
    
    for (let i = 0; i < numbers.length-1 ; i++) {
        if (numbers[i+1] - numbers[i] !== distance) {
            return false
        }
    }
    return true
}

const array = [10,8,6,4]

const falsearray = [2,4,0,8,10]

console.log(isArithmeticProgression(array),"==> Number1");

//number2

function threeStepsAB(str) {
    const regexPattern = /a.{3}b|b.{3}a/;

    return regexPattern.test(str);

}

console.log(threeStepsAB('lbne aorrowed'),"==> Number2")

//number3


function sumArray(arr, int) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === int) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

const arrayAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetSum = 10;

const hasilPasangan = sumArray(arrayAngka, targetSum);
console.log(hasilPasangan,"==> Number3");

//number4

function arrSum(arr) {
    let max = arr[0];
    let maxSoFar = arr[0];
    let start = 0;
    let end = 0;
    let temp = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max + arr[i]) {
            max = arr[i];
            temp = i;
        } else {
            max = max + arr[i];
        }

        if (max > maxSoFar) {
            maxSoFar = max;
            start = temp;
            end = i;
        }
    }

    return [arr.slice(start, end + 1), maxSoFar];

}


const inputArray = [-2, -3, 4, -1, -2, 1, 5, -3];
const [maxSubarray, maxSum] = arrSum(inputArray);
const result = [];
result.push(maxSubarray, maxSum);

console.log(result, "==> Number4");
