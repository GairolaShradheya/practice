const testCases = [
    {
        val1: true,
        val2: true,
        expectedOutput: true,
        title: "same boolean",
    },
    {
        val1: 2,
        val2: 2,
        expectedOutput: true,
        title: "same number",
    },
    {
        val1: 2,
        val2: "2",
        expectedOutput: false,
        title: "type equality",
    },
    {
        val1: "a",
        val2: "a",
        expectedOutput: true,
        title: "same string",
    },
    {
        val1: [],
        val2: [],
        expectedOutput: true,
        title: "empty array",
    },
    {
        val1: [1],
        val2: [1],
        expectedOutput: true,
        title: "same array",
    },
    {
        val1: [1],
        val2: [1, 2],
        expectedOutput: false,
        title: "different array",
    },
    {
        val1: { a: 1 },
        val2: { a: 1 },
        expectedOutput: true,
        title: "same object",
    },
    {
        val1: { a: 1 },
        val2: { b: 1 },
        expectedOutput: false,
        title: "different object",
    },
    {
        val1: { a: [1] },
        val2: { a: [1] },
        expectedOutput: true,
        title: "same object containing array",
    },
    {
        val1: { a: { b: 1 } },
        val2: { a: { b: 1 } },
        expectedOutput: true,
        title: "nested same object",
    },
    {
        val1: { a: undefined, c: 6 },
        val2: { b: 1, c: 9 },
        expectedOutput: false,
        title: "different object containing diff key1",
    },
    {
        val1: { b: 1 },
        val2: { a: undefined },
        expectedOutput: false,
        title: "different object containing diff key2 ",
    },
    {
        val1: [1],
        val2: { 0: 1 },
        expectedOutput: false,
        title: "array and object",
    },
    {
        val1: undefined,
        val2: undefined,
        expectedOutput: true,
        title: "undefined",
    },
    {
        val1: null,
        val2: null,
        expectedOutput: true,
        title: "null",
    },
    {
        val1: NaN,
        val2: NaN,
        expectedOutput: false,
        title: "NaN",
    },
];

function test(fun) {
    for (const element of testCases) {
        if (fun(element.val1, element.val2) === element.expectedOutput) {
            console.log("✅ ", element.title, " successful");
        } else {
            console.log("❌ ", element.title, " not successful");
        }
    }
}

module.exports = {
    test,
};
