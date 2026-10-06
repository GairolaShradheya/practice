function isPrime(number) {
    let ans = true;
    for (let i = 2; i < Math.trunc(number / 2) + 1; i++) {
        if (number % i == 0) {
            ans = false;
        }
    }
    return ans;
}

function getNthPrime(num) {
    let primeCount = 1;
    let number = 2;

    while (primeCount < num) {
        number++;
        const prime = isPrime(number);
        if (prime) {
            primeCount++;
        }
    }
    return number;
}

let i = 1;
while (2 ** i < 1000) {
    console.log(2 ** i);
    i++;
}
