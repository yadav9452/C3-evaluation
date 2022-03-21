const mongoose= require("mongoose");

const publicationSchema=new mongoose.Schema({
    name:{type:String,require:true},  
},{
    versionKey:false,
    timestamps:true,
})

const Publication= mongoose.model("user",publicationSchema);

module.exports=Publication;