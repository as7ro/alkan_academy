import express from "express";


const app =  express();


const port = 3000;

app.get("/",(req,res)=>{
res.send("form sehifesi")
})

app.listen(port, ()=>{
    console.log(`muraciet formumuzun islediyi port: ${port}`);
});