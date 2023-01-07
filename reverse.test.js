
const reverseStr = require('./reverseStr.js');

test('Testing reverse string function', ()=> {
    let string = "abcd";
    let output = reverseStr(string);
    expect(output).toBe("dcba");
})