import { products } from "./constants/data.js";
import Product from "./model/productSchema.js";
const DefaultData=async()=>{
    try{
        await Product.insertMany(products);
        console.log("Products successfully added");
    }
    catch(error){
        console.log(error);
    }
};
export default DefaultData;