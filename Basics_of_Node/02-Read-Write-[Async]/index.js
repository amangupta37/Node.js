
//---------Reading data Asynchronously-------------

const mod= require('fs');

mod.readFile('./txt/start.txt' ,'utf-8' , (err,data) =>{

    mod.readFile(`./txt/${data}.txt` ,'utf-8' , (err,new_data) =>{

        console.log(new_data);
         
        //--------Writing File Asynchronously---------------

        mod.writeFile('./txt/output.txt',`This the new data which we have to write \n ${new_data}`,'utf-8', err =>{

            console.log("data is written Successfuly...!!!")
        })



    })
})

console.log("Reading value......");


