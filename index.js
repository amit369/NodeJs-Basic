const app = require('./app');

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