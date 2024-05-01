
// using Asynchronous 

const fs = require("fs");


// create a folder name it Thapa
// create a file in it named bio.txt and data into it/
// add more data into the file at the end of the existing data
// read the data without getting the buffer data at first 
// rename the file name to mybio.txt
// now delete both the file and the folder 


// const fs= require("fs");
// fs.mkdir("Thapa",(err)=>{
// console.log('successfully created folder');
// })


// fs.writeFile("Thapa/bio.txt","hello guys , my name is Harkamal",(err)=>{
//     console.log("successfullly created file");
// })


// fs.appendFile("Thapa/bio.txt"," and i am from Goindwal sahib",(err)=>{
//     console.log("successfully added the content in file");

// })

// fs.readFile('Thapa/bio.txt', "utf8",(err,data)=>{
//     console.log(data);
// })

// fs.rename("Thapa/bio.txt","Thapa/mybio.txt",(err)=>{
//     console.log("rename is done");
// })

// fs.unlink("Thapa/mybio.txt",(err)=>{
//     console.log("deleting of file is donee");
// })

// fs.rmdir("Thapa",(err)=>{
//     console.log("deleting of folder is done");
// })