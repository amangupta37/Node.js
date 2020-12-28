//-------------Adding HTTP STATUS CODE (404 NOT FOUND) & HTTP HEADER in Node.js-------------------

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
        // Adding http status code and http header for page not found (i.e 404 status code)
        resp.writeHead(404, {
            'Content-type':'text/html', // http header
            'my-own-header':'hello world !!!' // created my own http header
        }); 

        resp.end("<h1>Page Not Found</h1>");
    }
})

// Start The server

server.listen(7000,'127.0.0.1', () =>{

    console.log("Listining to request at port 7000");
})