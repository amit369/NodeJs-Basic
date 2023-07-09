const fs = require('fs');

fs.readFile('hello.txt', (err,data) => {
    if(err)
    throw err;
    const buf = Buffer.from('hell.txt');
    console.log(buf);
    console.log(data);
})