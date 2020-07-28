const http = require('http');

http.createServer( (req, res) => {
    
    res.writeHead(200, {'Content-Type': 'application/json'});

    const response = {
        name: 'Luis',
        age: 29,
        url: req.url
    };
    
    res.write(JSON.stringify(response));
    
    res.end();

})
.listen(8080);

console.log('Listening on port: 8080');