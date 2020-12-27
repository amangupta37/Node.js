
//---------Reading data Asynchronously-------------

const mod= require('fs');

mod.readFile('./txt/start.txt' ,'utf-8' , (err,data) =>{

    mod.readFile(`./txt/${data}.txt` ,'utf-8' , (err,data) =>{

        console.log(data);
    })
})

console.log("Reading value......");