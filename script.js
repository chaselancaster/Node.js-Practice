const largeNumber = require('./script2');

const a = largeNumber;
const b = 5;

setTimeout(() => {
    console.log(a + b)
}, 3000)

console.log(__dirname)