const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv").config();
const logger=require("../middlewares/logger");

const router=require("./routes/products.route");

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger);

app.use("/products",router);




const port=process.env.PORT;
app.listen(port || 5000,()=>{

    console.log("Server is running.");
    
})