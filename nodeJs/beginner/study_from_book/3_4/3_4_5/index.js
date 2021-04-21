const { odd, even } = require('./var');

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
console.log(checkStringOddOrEvent('hello'));
console.log(checkStringOddOrEvent('hello2'));