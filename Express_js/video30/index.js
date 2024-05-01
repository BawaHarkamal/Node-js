const express=require('express');
const path=require('path');
const app=express();
const port=4500;
const staticPath=path.join(__dirname,'../Fitness');

console.log(path.join(__dirname,'../Fitness'));
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
res.send("hello from the server side");
});
app.listen(port,()=>{
    console.log(`listening to the ${port}`);
});