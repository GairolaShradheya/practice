// const inputData = [-2, -5, -7, -4];
const inputData = [];

function sumOfArrayElements(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumOfArrayElements(arr.slice(1));
}

function maximumArray(arr1, arr2) {
    return sumOfArrayElements(arr1) > sumOfArrayElements(arr2) ? arr1 : arr2;
}

function getMaximumArray(arr) {
    let maxArray = arr.slice(0, 1);
    for (let index = 2; index < arr.length; index++) {
        maxArray = maximumArray(maxArray, arr.slice(0, index));
    }

    if (arr.slice(1).length <= 1) return maxArray;
    return maximumArray(maxArray, getMaximumArray(arr.slice(1)));
}

console.log(getMaximumArray(inputData));
