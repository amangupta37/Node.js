//-------------Implementing Routing in Node.js-------------------

// Added a http modeule

const http = require('http');

// Added a url module 

const url = require('url');


// Created a server

const server = http.createServer((req,resp) =>{

    // Implementing Routing 
    
    const path = req.url;  // storing the url into a variable

    if(path==='/' || path==='/overview')
    {
        resp.end("This is an OVERVIEW...!!!");

    }
    else if(path==='/product')
    {
        resp.end("This is a PRODUCT...!!!");
    }
    else
    {
        resp.end("Page Not Found");
    }
})

// Start The server

server.listen(3000,'127.0.0.1', () =>{

    console.log("Listining to request at port 3000");
})