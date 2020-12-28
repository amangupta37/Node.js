

//----------------Creating a Simple Server in Nodejs----------------------

// add a module http for network operation

const http = require ('http');

//Create a Server 

const server = http.createServer((req,res) =>{
    res.end("Hello from Server...!!!")
})

// starting the server or listining to client request

server.listen(5000,'127.0.0.1',() =>{
    console.log('Listining the request at 5000')
})