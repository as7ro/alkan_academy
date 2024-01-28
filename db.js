import mongoose from "mongoose";


const conn  = ()=>{
    mongoose.connect(process.env.DB_URI, {
        dbName: "alkan_academy",
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("db ya qosulduq")
    }).catch((err)=>{
        console.log(`dbe qosulmadi, ${err}`);
    })
}


export default conn;