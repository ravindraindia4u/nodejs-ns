const http = require("http");
const hostname = "localhost"; //"127.0.1"
const port = 8000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-type","text/plain");
    res.end("Hello World");
})

server.listen(port,hostname,()=>{
    console.log("server started at port",port);
})