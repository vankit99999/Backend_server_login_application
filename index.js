
const express = require('express');
const app = express();
const collection = require("./db");
const cors = require("cors")
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get("/",cors(),(req,res)=>{});

app.post("/signup",cors(),async(req,res)=>{
    const {name,email,password} = req.body;
    const data={
        name:name,
        email:email,
        password:password
    }
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.status(404).json("exist");
            return;
        }
        else{
            res.status(200).json("registered and signed in");
            await collection.insertMany([data]);
            return;
        }
    }catch{
        res.json("not exist");
    }
})

app.post("/",cors(),async(req,res)=>{
    const {email,password} = req.body;
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.status(200).json("exist");
            return;
        }
        else{
            res.json("Registerd");

        }
    }catch{

        res.json("not exist");
    }
})


app.listen(8080,(err)=>{ if(err) {console.log(err);}else{console.log(`lisening on port 8080..`);}});

