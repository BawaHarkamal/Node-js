const fs_name=require("fs");
// synchronous version in which there is no parallel working


// Creating a new file
fs_name.writeFileSync("read.txt","welcome to bawa site");
// in this case data is overwrite
fs_name.writeFileSync("read.txt","welcome to bawa saab site");

// to add the content, use append
fs_name.appendFileSync("read.txt","how are you man, all good");


// for reading the synchronous version file 
fs_name.readFileSync("read.txt");
