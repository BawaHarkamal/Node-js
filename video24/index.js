// for handling the http request and response on our own port
const http=require('http');

const fs=require('fs');
// for get html file given below
var requests = require("requests");
const homeFile=fs.readFileSync('home.html','utf-8');

// creation of server
// what is routing?
// Routing, in the context of web development, refers to the process of determining how an application responds to a client request to a particular endpoint (URI) and HTTP method (such as GET, POST, PUT, DELETE, etc.). It involves defining rules or routes that map URLs to specific pieces of application logic, typically controller functions or handlers.

// In simpler terms, routing decides what happens when a user visits different URLs on a website or interacts with an API. It's like providing directions for the server on how to respond to incoming requests.


//what is streaming
// Streaming media is multimedia for playback using an offline or online media player. Technically, the stream is delivered and consumed in a continuous manner by a client, with little or no intermediate storage in network elements

const server=http.createServer((req,res)=>{
    //creating of URL or routing
    if(req.url=="/"){
        requests('api.openweathermap.org/data/2.5/weather?q=Pune&appid=a74f572a9484858fdbf0699c8581e02d')
.on('data', (chunk)=> {
    const objdata=JSON.parse(chunk);
    const arrData=[objdata];
    console.log(arrData); 
})
.on('end', (err)=> {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
        
    }
})
server.listen(8000,"127.0.0.1");


