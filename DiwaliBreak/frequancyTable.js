const arr = ["apple", "banana", "apple", "orange", "banana"];

const frequancy = {};
for (const element of arr) {
    frequancy[element] === undefined
        ? (frequancy[element] = 1)
        : frequancy[element]++;
}

console.log(frequancy);
