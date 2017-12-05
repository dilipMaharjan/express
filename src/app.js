const express =require('express');

const app=express();
app.disable('x-powered-by');

app.get('/',(req,res)=>{
res.send("Hello Express!");
});
const PORT='3000';
app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`)
});