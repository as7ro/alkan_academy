import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import cookieParser from "cookie-parser";
import pageRoute from "./routes/pageRoute.js"
import formRoute from "./routes/formRoute.js"
import userRoute from "./routes/userRoute.js"
import { checkUser } from "./middlewares/authMiddleware.js";


dotenv.config();



//connection db 
conn();



const app =  express();
const port = process.env.PORT

//ejs template engine
app.set("view engine","ejs");



//statuic files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//routes
app.get("*",checkUser)
app.use("/",pageRoute);
app.use("/forms",formRoute);
app.use("/users",userRoute)

// app.get("/",(req,res)=>{
// res.render("index")
// })
// app.get("/about",(req,res)=>{
//     res.render("about")
//     })




app.listen(port, ()=>{
    console.log(`muraciet formumuzun islediyi port: ${port}`);
});