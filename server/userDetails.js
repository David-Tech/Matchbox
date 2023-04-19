const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    age: Number,
    fname: String,
    lname: String,
    email: { type: String,unique: true},
    password: String,
    verifypwd: String,
},
{
    collection: "UserInfo",
}
);

mongoose.model("UserInfo", userDetailSchema);