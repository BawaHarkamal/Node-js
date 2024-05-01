// www.bawa.com - welcome to home page
// /about - welcome to about 
// /contact - welcome to contact 
// /temp - welcome to temp 
const path=require('path');
const express=require('express');
const app=express();
const staticPath=path.join(__dirname,'../video29');//this is how we can find the absolute path of any directory using __dirname and we can serve the static web page in express using the express.static
// console.log(staticPath);


app.use(express.static(staticPath))
const port=4000;
app.get('/',(req,res)=>{
    res.send("welcome to my home page");
});
app.get('/about',(req,res)=>{
    res.send("welcome to my about page");
});
app.get('/contact',(req,res)=>{
    res.send("welcome to my contact page");
});

app.listen(port,()=>{
console.log({port});
});


// 304 status code means that the server is not sending the requested resource again because the client already has a current version of the resource in its cache.
