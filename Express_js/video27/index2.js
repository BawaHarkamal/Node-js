const path=require('path');
const express=require('express');
const app=express();
// const staticPath=path.join(__dirname,'../video29');
const templatePath=path.join(__dirname,'../video27/templates');


console.log(templatePath);
// to set the view engine 
app.set('view engine', 'hbs');
app.set('views',templatePath);
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});


// app.use(express.static(staticPath))
const port=4080;

// template route engine 
app.get("",(req,res)=>{
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
