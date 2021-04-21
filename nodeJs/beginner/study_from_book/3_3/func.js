const { odd, even } = require('./var');

function checkOddorEvent(num) {
    if (!num || isNaN(num)) {
        return `it's not nubmer`
    }
    if (num % 2) {
        return odd;
    }
    return even;
}

module.exports = checkOddorEvent;