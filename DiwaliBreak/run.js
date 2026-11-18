const inputData = [1, 2, 3, 3, 4, 6, 4, 2, 2, 2, 1, 2, 3];

function getDifferenceSign(a, b) {
    return Math.sign(a - b);
}

const result = [];

let startingIndex = 0;
let prevDifferenceSign = getDifferenceSign(inputData[0], inputData[1]);

for (let i = 1; i < inputData.length; i++) {
    const currDifferenceSign = getDifferenceSign(
        inputData[i],
        inputData[i + 1],
    );
    if (currDifferenceSign === 0) continue;

    if (prevDifferenceSign !== currDifferenceSign) {
        result.push(inputData.slice(startingIndex, i + 1));
        prevDifferenceSign = getDifferenceSign(inputData[i], inputData[i + 1]);
        startingIndex = i + 1;
    }
}

console.log(result);
