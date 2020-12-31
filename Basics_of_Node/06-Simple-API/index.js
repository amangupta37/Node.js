//--------------Creating a simple web API -------------------------
const http = require('http');


//-----------------Create a server------------

const server = http.createServer((req,res) =>{

    res.end("hello world");

})

//-------------listen incomming request--------------

server.listen(4000,'127.0.0.1' , () =>{

    console.log("Listining to the request at 4000");
})