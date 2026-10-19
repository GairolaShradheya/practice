const a = 29;
const b = 43;
const operation = "*";

switch (operation) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    default:
        console.log("Unknown operation");
}
