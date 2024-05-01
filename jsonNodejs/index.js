const fs= require("fs");

//this is simple creation of object in javscript
const bioData = {
    Myname:"Bawa",
    age:"20",
    channel:'thapa technical',

};

console.log(bioData.Myname);

// to convert object into json we need 
// const jsonData=JSON.stringify(bioData);
// console.log(jsonData);


// //to convert json into object

// const objData=JSON.parse(jsonData);
// console.log(objData);


//convert object to json
//then add to the another json file
//read the file
//again convert back to js object
//console.log

const jsondata = JSON.stringify(bioData);
fs.writeFile("json1.json",jsondata,(err)=>{
    console.log("done");
})
fs.readFile("json1.json","utf-8",(err,data)=>{
    // console.log(data);
    const orgData=JSON.parse(data);
    console.log(orgData);
})