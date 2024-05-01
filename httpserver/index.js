const fs=require("fs");
const http = require("http");


const server=http.createServer((req,res)=>{
    if(req.url=="/"){

        res.end('Hello from the other side'); 
    }
    else if(req.url=='/contact'){
        res.end('Hello from the contact side'); 
    }
    else if(req.url=='/home'){
        res.end('Hello from the home side'); 
    }
    else if(req.url=='/userapi'){
        fs.readFile(`${__dirname}/userApi/userapi.json`,"utf-8",(err,data)=>{
            const objData=JSON.parse(data)
            console.log(data);
            res.end(objData[0].firstName); 
        });
    }
    else{
        res.end('404 error Not found');
    }
});
server.listen(8000,"127.0.0.1", ()=>{
    console.log("listening to port no. 8000");
});

//favicon is that small image which  is at starting of particular tab
//code 200 in network only show when the working is completely fine

