"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const anon = new Person('Serjjjj');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('AAaaaaaaaa!');
});
let anyFlag;
const globalvar = 'message';
function logInfo(data, _) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
logInfo('I am Groot');
function multiple(a, b) {
    if (a && b) {
        return a * b;
    }
    return 0;
}
//# sourceMappingURL=src.js.map