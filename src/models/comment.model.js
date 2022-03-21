const mongoose= require("mongoose");

const commentSchema=new mongoose.Schema({
    body:{type:String,require:true},  
},{
    versionKey:false,
    timestamps:true,
})

const Comment= mongoose.model("user",commentSchema);

module.exports=Comment;