// create a folder name it Thapa
// create a file in it named bio.txt and data into it/
// add more data into the file at the end of the existing data
// read the data without getting the buffer data at first 
// rename the file name to mybio.txt
// now delete both the file and the folder 
const { isUtf8 } = require("buffer");
const fs=require("fs");
const { fileURLToPath } = require("url");
// fs.mkdirSync("Thapa");


// fs.writeFileSync("Thapa/bio.txt" ,"my name is thapa technical");


// fs.appendFileSync("Thapa/bio.txt","how are you brother");


// const data= fs.readFileSync("Thapa/bio.txt", "utf-8"); utf is for encoding of data to get real output not buffer

// console.log(data);


// fs.renameSync("Thapa/bio.txt","Thapa/mybio.txt");



// for deleting the txt file 
// fs.unlinkSync("Thapa/mybio.txt"); 

// for deleting the folder 
fs.rmdirSync("Thapa");







