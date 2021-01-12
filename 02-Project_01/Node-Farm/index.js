//--------------------------------Creating a simple web API ----------------------------------

//---------------Module Required-----------------------

const md = require('fs');
const http = require('http');
const url = require('url');

//------------Read data Synchronously------------------

const temp_Overview = md.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const temp_product = md.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

const temp_Card = md.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const newdata = md.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
const dataObj = JSON.parse(newdata); // string to json coversion

//-----------------Create a server---------------------

function replacetemp (objdata , changedata) {

  
  let  placedata = changedata.replace(/{%PRODUCTNAME%}/g,objdata.productName);

   placedata = placedata.replace(/{%IMAGE%}/g,objdata.image);
   placedata =placedata.replace(/{%PRICE%}/g,objdata.price);
   placedata =placedata.replace(/{%FROM%}/g,objdata.from);
   placedata =placedata.replace(/{%NUTRIENTS%}/g,objdata.nutrients);
   placedata =placedata.replace(/{%QUANTITY%}/g,objdata.quantity);
   placedata =placedata.replace(/{%DESCRIPTIONS%}/g,objdata.description);
   placedata =placedata.replace(/{%ID%}/g,objdata.id);
   if(!objdata.organic)
   placedata = placedata.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
   return placedata;
}

const server = http.createServer((req,res) =>{

    const path = req.url;
    const {pathname , query } = url.parse(path,true);

   if(pathname ==='/' || pathname === '/overview')
   {    
       
      const ovrdata = dataObj.map(el => replacetemp(el,temp_Card))
     
       res.writeHead(200,{'Content-type':'text/html'}) 

       const finaloutput = temp_Overview.replace(/%PRODUCT_CARD%/,ovrdata)
       res.end(finaloutput);
      
   }
   else if(pathname ==='/product')
   {    

    
    
    const product  = dataObj [query.id]; 

     const output  = replacetemp(product,temp_product);

      res.end(output);
   
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
