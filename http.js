var http = require("http")

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.write('2333')
    response.end();
}).listen(8888)
