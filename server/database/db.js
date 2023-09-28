import mongoose from "mongoose";


export const Connection = async ()=>{
    const URL="mongodb://127.0.0.1:27017/flipkartDB";
    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log("Database connected successfully");
    }
    catch(error){
        console.log(error);
    }
}
export default Connection;