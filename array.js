function areEqualTo(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
            return areEqualTo(array1[i], array2[i]);
        }
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

function reverse(array) {
    const newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray[i] = array.at(-(i + 1));
    }
    return newArray;
}

function selectOdds(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function mapLengths(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i].length;
    }
    return newArray;
}

function filterAbove(array, threshold) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= threshold) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function filterBelow(array, threshold) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < threshold) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function findIndex(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

function findLastIndex(array, element) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

function fibonacci(number) {
    const array = [];
    let firstNum = 0;
    let secondNum = 1;
    for (let i = 0; i < number; i++) {
        array.push(firstNum);
        const tempSum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = tempSum;
    }
    return array;
}

function reverseFibonacci(number) {
    const array = [];
    let firstNum = 0;
    let secondNum = 1;
    for (let i = 0; i < number; i++) {
        array.unshift(firstNum);
        const tempSum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = tempSum;
    }
    return array;
}

const students = [
    { name: "Anu", marks: 80 },
    { name: "Rahul", marks: 65 },
    { name: "Meera", marks: 91 },
    { name: "Vikram", marks: 72 },
];

function moreAtLeast70(students) {
    const newArray = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks >= 70) {
            newArray.push(students[i].name);
        }
    }
    return newArray;
}

function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}

console.log(
    sumMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
);
