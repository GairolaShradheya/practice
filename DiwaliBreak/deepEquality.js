const { test } = require("./test");

function areObjectEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (const key in obj1) {
        if (key in obj2) return isEqual(obj1[key], obj2[key]);
        else return false;
    }

    return true;
}

function type(value) {
    if (value === null) return null;
    if (Array.isArray(value)) return "array";
    return typeof value;
}

function isEqual(value1, value2) {
    if (type(value1) !== type(value2)) {
        return false;
    }

    switch (type(value1)) {
        case "array":
            return areObjectEqual(value1, value2);
        case "object":
            return areObjectEqual(value1, value2);
        default:
            return value1 === value2;
    }
}

test(isEqual);
