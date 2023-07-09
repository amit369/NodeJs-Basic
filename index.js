const app = require('./app');
const fs = require('fs');
const arr = [2,4,7,1];
console.log(arr[1]);

console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());

let result = arr.filter((item) => {
    return item >=2
});
console.log(result);
fs.writeFileSync("hello.txt", "Welcome to Chandigarh");

const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);

console.log(" dirname  =>> ", __dirname);
console.log(" filename  ==>> ", __filename);

var buf = Buffer.from('hello.txt', 'utf-8');
console.log(buf);

