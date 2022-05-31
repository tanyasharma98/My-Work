const http = require('http');
const fs = require('fs');

const filecontent= fs.readFileSync('layout.html');

const server= http.createServer((req , res)=>{
res.writeHead(200,{'content.type':'textt/html'});
res.end(filecontent);
})

server.listen(80,'127.0.2.1',()=>{
    console.log("Listening port at 80")
})
// server.listen(8000,'127.0.2.1',()=>{
//     console.log("Listening port at 8000")
// })

