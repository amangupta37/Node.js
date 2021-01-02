//--------------------------------Creating a simple web API ----------------------------------

//---------------Module Required-------------------



const md = require('fs');
const http = require('http');
const url = require('url');


//-----------------Create a server--------------

const server = http.createServer((req,res) =>{

    const pathname = req.url;

   if(pathname ==='/' || pathname === '/home')
   {
       
       res.end("Welcome to home");
   }
   else if(pathname ==='/api')
   {    
          //reading data from the file 

         md.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data) =>{

            res.writeHead(200, {'Content-type' : 'text/json'} );  //showing data in json formate

            res.end(data); // display data on webpage
          
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