const { application, response } = require('express');
const express=require('express');
// we can create the app by simply using the express function
const app=express();
app.get('/',(req,res)=>{
    res.send("hello world from the Bawa");
});
app.get('/about', (req,res)=>{
    res.send("hi , I am Harkamal Bawa , study at NIT jalandhar");

});
app.listen(3000,()=>{
    console.log("listen the port at 3000")
})
// /- denotes the root domain 
// callback is used show whatever show in  route file

// The callback function has 2 parameters,requests(req) and response(res) 
// The request represents the Http request and has properties for the request query, parametes,body , http headers 
// similarly , the response object represents the HTTP response 
// that  the Express app sends when it receives an http request 



// API
// get=to get or read data from the server
// post-create the new data
// put=update the data
// delete- delete the data 