//--------------------------------Creating a simple web API ----------------------------------

//---------------Module Required-----------------------

const md = require('fs');
const http = require('http');
const url = require('url');

//------------Read data Synchronously------------------

const temp_Overview = md.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const temp_Card = md.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const newdata = md.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
const dataObj = JSON.parse(newdata); // string to json coversion

//-----------------Create a server---------------------

function replacetemp (objdata,changedata) {

  //  console.log(objdata);

    //console.log(changedata);
    console.log( changedata.replace(/%PRODUCTNAME%/g,objdata.productName));

}

const server = http.createServer((req,res) =>{

    const pathname = req.url;

   if(pathname ==='/' || pathname === '/overview')
   {    
       
      const ovrdata = dataObj.map(el => replacetemp(el,temp_Card))
     
       res.writeHead(200,{'Content-type':'text/html'})
       res.end(temp_Overview);
      
   }
   else if(pathname ==='/product')
   {    
     res.end("THIS IS PRODUCT PAGE");
   
   }
   else if(pathname ==='/api')
   {    
      res.writeHead(200, {'Content-type' : 'text/json'} );  //showing data in json formate
      res.end(newdata); // display data on webpage                                                                       
         
   }
   else{
       res.writeHead(404,{
           'Content-type':'text/html'
       })
       res.end("<h1>Page not Available</h1>");
   }

})

//-------------listen incomming request---------------

server.listen(7000,'127.0.0.1' , () =>{

    console.log("Listining to the request at port 7000");

})