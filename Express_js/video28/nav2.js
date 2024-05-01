// How to send the html and json data as respinse in express

const express=require('express');
const app=express();
const port=5000;
// res.write means that it will write the response and multiple html can be passed until it confirmed that no more data is to be write 
app.get('/',(req,res)=>{
    res.write("<h1>welcome to my home page</h1>");
    res.write("<h1>welcome to again home page</h1>");//we can send html element as a response 
    res.send();//this will end the loading of the page after all queries are written completely
});
app.get('/about',(req,res)=>{
    res.send("welcome to my about page");
});
app.get('/contact',(req,res)=>{
    res.send({
        id:2502,
        name:"Lucky"
    });
});//sending the javascript object or array of objects as a response to the client
//json.stringify- converts into json format
//json.parse-converts json into javascript object


// we can also send response using res.json instead of res.send
//the  methods are identical when an object or array is passed , but res.json() will also convert non-objects , such as null and undefined , which are not valid JSON


//try  to find out differentiate between res.json and res.send

app.listen(port,()=>{
console.log({port});
});