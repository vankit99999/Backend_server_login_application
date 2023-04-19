const mongoose =require("mongoose");


    const connectionparams = {
            useNewUrlParser:true,
            useUnifiedTopology:true,
    };
mongoose.connect("mongodb+srv://chilusanisaitejaiithyderabad07:8555076996@cluster1.a4zizem.mongodb.net/test2",connectionparams).then(()=>{
            console.log("connection to database successfully");
        }).catch((error)=>{
     console.log(error);
     console.log("could not connect");
    })

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema);

module.exports = collection;