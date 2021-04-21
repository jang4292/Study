const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEvent(str) {

    if (!str || !str.length) {
        return 'null';
    }

    if (str.length % 2) {
        return odd;
    }
    return even;

}

console.log(checkStringOddOrEvent());
console.log(checkNumber());
console.log(checkNumber(10));
console.log(checkStringOddOrEvent('hello'));