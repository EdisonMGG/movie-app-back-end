const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "actor":{type:String,required:true},
        "date":{type:String,required:true},
        "releaseyr":{type:String,required:true},
        "theater":{type:String,required:true},
        "production":{type:String,required:true}

    }
)
let moviemodel=mongoose.model("movie",schema);
module.exports={moviemodel}