const express=require("express");
const connect=require("./configs/db");
const userController=require("./controllers/user.controllers");
const bookController=require("./controllers/book.comtrollers");
const commentController=require("./controllers/book.comtrollers");


const app=express();
app.use(express.json());

app.use("/users",userController);
app.use("/books",bookController);
app.use("/comments",commentController);




app.listen(5000,async()=>{
    try{
        await connect();
        console.log("LIstening on Port 5000");
    }catch(err){
        console.log(err);
    }
});