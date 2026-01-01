const express=require('express');
const app=express();
app.use(express.json());
app.get('/user',(req,res)=>{
    const {name,age}=req.query;
    res.send(`hello ${name} n she is ${age}`);
});

app.post('/user',(req,res)=>{
    const {name,age}=req.body;
    res.send(`User ${name}, age ${age} added!`)
})
app.listen(3000,()=>
console.log("Server running on localhost:3000"));