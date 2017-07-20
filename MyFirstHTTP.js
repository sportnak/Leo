const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1'; // local loopback adress
const port = 3000;

fs.readFile('htmlWithNano.html', (err, html) =>{
    if(err){
        throw err;
    }

    // special type of function.. arrow function not sure
    const server = http.createServer((request,res) => { 
        // set status code, 200 says everything is ok
        res.statusCode = 200;
        res.setHeader('Content-type','text/html');
        res.write(html);
        res.end();
        // documentation for this stuff is 
    });

    server.listen(port,hostname, () => {
        console.log('server started on port '+port);
    });

});