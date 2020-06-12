var http=require('http'),
fs=require("fs");

function serveStaticFile(res,path,contentType){

  fs.readFile(__dirname+path,function(err,data){
    if(err){
      throw err;
    }
    else{
      res.writeHead(200,{contentType});
      res.end(data);
    }
  })
}

http.createServer((req,res)=>{
  var path =req.url;
  switch(path){
    case "/":
    serveStaticFile(res,'/public/home.html',"text/html");
    break;
    case "/about":
    serveStaticFile(res,'/public/about.html',"text/html");
    break;
    default:
      res.writeHead(404,{contentType:"text/plain"});
      res.end("Page Not Found ☹️")
  }
}).listen(8080)
