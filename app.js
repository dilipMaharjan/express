var express =require('express');
var app=express()

app.get('/',(req,res)=>{
res.send("Hello Express!");
});
const PORT='3000';
app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`)
});