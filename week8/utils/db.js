import mongoose from "mongoose";

const db = () => {
    mongoose.connect(process.env.MONGO_URL)
   .then(() => {
    console.log("mongodb connected successfully");    
   })
   .catch((err) => {
      console.log("err while db connect", err);      
   })
}
//console.log("About know db :", db);

export default db;