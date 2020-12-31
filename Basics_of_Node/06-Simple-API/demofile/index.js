<<<<<<< HEAD
const path = require('path');

const data = path.dirname('c/Users/Aman gupta/Adv_Nodejs/Basics_of_Node/06-Simple-API/index.js')
const data1 = path.parse('c:/Users/Aman gupta/Adv_Nodejs/Basics_of_Node/06-Simple-API/index.js')
const data2 = path.parse(`${__dirname}/index.js`);

console.log(data);
console.log(data1);
console.log(data2)

=======
//--------------------------Understanding __dirname in Nodejs-----------------------------------------

const data = path.dirname('c/Users/Aman gupta/Adv_Nodejs/Basics_of_Node/06-Simple-API/index.js')
const data1 = path.parse('c:/Users/Aman gupta/Adv_Nodejs/Basics_of_Node/06-Simple-API/index.js')
const data2 = path.parse(`${__dirname}/index.js`);

console.log(data);
console.log(data1);
console.log(data2);
>>>>>>> 55682f17ab843a673cfe6a109bdfcbcf01a2a172
