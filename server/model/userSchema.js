import mongoose from "mongoose";

const user_schema=new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
        max:20
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        max:20
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        index:true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        index:true,
        lowercase: true
    },
    phone:{
        type: String,
        required: true,
        min: 10,
        max: 10
    },
    password:{
        type:String,
        required: true
    }

});

const User= mongoose.model("user",user_schema);

export default User;