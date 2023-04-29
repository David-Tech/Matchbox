const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bcrypt=require("bcryptjs");
const req = require("express/lib/request");
const res = require("express/lib/response");

const jwt=require("jsonwebtoken");

const JWT_SECRET="hvdvarfjgqhgjqwp[gq[rgqjhgkrgkhgjhhfjngjwngjhjwghrwjgnrwhgy";

app.listen(5000, () =>{
    console.log("Server Started");
})

//Possibly will have to create additional accounts on MongoDB for group members 
const mongoUrl = "mongodb+srv://dbriken:dbriken@cluster0.7l8gwed.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(mongoUrl,{
    useNewUrlParser:true
    })
    .then(()=> {console.log("connected to database");
    })
    .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");



app.post("/post", async(req,res) =>{
    console.log(req.body);
    const {data}=req.body;
    //Best Practice API 
    try{
        if(data =="david"){
            res.send({status: "ok"});
        }else{
            res.send({status:"User Not found"});
        }
    }catch(error){
        res.send({status:"something went wrong"});
    }
});


app.post("/register", async(req,res)=>{ //api call to create a user in the mongoose database
    const{age, fname, lname, email, password, verifypwd} = req.body;
    
    const encryptedPassword= await bcrypt.hash(password, 10);
    try{
        const oldUser= await User.findOne({email});

        if (oldUser){
            return res.send({ error: "User Exists"});
        }
        await User.create({
            age,
            fname,
            lname,
            email,
            password: encryptedPassword,
            verifypwd: encryptedPassword,
        });
        res.send({status: "ok"})
    }catch (error){
        res.send({status: "error"})
    }
})

app.post("/login-user", async(req,res) => {
    const {email, password } = req.body;
    const user= await User.findOne({email});

    if(!user){      //check if email exists or not
        return res.json({ error: "User not found"});
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({email:user.email}, JWT_SECRET);

        if(res.status(201)){
            return res.json({ status: "ok", data: token});
        }else{
            return res.json({error: "error"});
        }
    }
    res.json({status: "error", error: "Invalid Password"});
});

app.post("/userData", async (req, res) =>{
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        
        const userEmail = user.email;
        User.findOne({email: userEmail}).then((data) => {
            res.send({status: "ok", data });
        }).catch((error) => {
            res.send({status: "error", data: error});
        })
    }catch (error){}
})

