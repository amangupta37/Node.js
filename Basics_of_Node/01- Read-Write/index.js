//--------Read file synchronously in node.js---------

const md = require('fs');

const textread = md.readFileSync('./txt/read-this.txt' , 'utf-8');

console.log(textread);


//---------Writing file synchronously in node.js------


const addtext = `performing writing operation in node.js \n This is what we know about avocado : ${textread}`;
md.writeFileSync('./txt/output.txt',addtext);
console.log("Data is sucessfully added in file");



