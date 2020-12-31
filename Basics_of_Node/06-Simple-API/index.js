//--------------Creating a simple web API -------------------------
const md = require('fs');
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
         md.readFile('./dev-data/data.json','utf-8',(err,data) =>{
            res.writeHead(200, {'Content-type' : 'applictaion/json'} );
            res.end(data);
          
         });                                                                           
         
        
   }
   else{
       res.writeHead(404,{
           'Content-type':'text/html'
       })
       res.end("<h1>Page not Available</h1>");
   }

})

//-------------listen incomming request--------------

server.listen(4000,'127.0.0.1' , () =>{

    console.log("Listining to the request at port 4000");
})