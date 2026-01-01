const express=require('express');
const app=express();
const path=require('path');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/submit-form',(req,res)=>{
    const {name,age,email}=req.body;
    res.send(`POST Request- User ${name}, Age: ${age} Email: ${email} added`);
})

app.listen(3000,()=>
console.log("Server running on localhost:3000"));