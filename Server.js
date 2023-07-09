const http = require('http');

function test(a) 
{
    return a;
}
const test2 = (a) => a*100;


const dataControl = (req, res) => {
    res.write("<h1> Hello, This is Amit Chaman </h1>");
    res.end();
    console.log(test2(100));
}

http.createServer(dataControl).listen(5050);