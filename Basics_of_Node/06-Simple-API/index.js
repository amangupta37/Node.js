//--------------Creating a simple web API -------------------------
const http = require('http');
const url = require('url');


//-----------------Create a server------------

const server = http.createServer((req,res) =>{

    const pathname = req.url;

   if(pathname==='/' || pathname === '/home')
   {
       res.end("Welcome to home");
   }
   else if(pathname==='/api')
   {
       res.end("Welcome to api")
   }
   else{
       res.end("Page not Available");
   }

})

//-------------listen incomming request--------------

server.listen(4000,'127.0.0.1' , () =>{

    console.log("Listining to the request at port 4000");
})