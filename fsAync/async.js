const fs = require("fs");

// const data=fs.readFileSync("read.txt","utf-8");
// console.log(data);

// console.log("after the data");


// we can see that in synchronous we canit switch to the other request until first one is completed



fs.readFile("read.txt",'utf-8',(err,data)=>{
    console.log(data);
    console.log(err);

})
console.log("after the data");