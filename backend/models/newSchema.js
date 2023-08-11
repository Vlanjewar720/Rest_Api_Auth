const mongoose = require("mongoose");

const LogUserScehma = new mongoose.Schema(
  {
    fname:{
        type: String,
        // required: true,
    } ,
    lname: {
        type: String,
        // required: true,
    } ,
    email:{
        type: String,
        // required: true,
    } ,
    password:{
        type: String,
        // required: true,
    } ,
    userType:{
        type: String,
         default: "User",
        // required: true,
    } ,
   
  },
 
);

module.exports = LoginUser = mongoose.model("RestAUser", LogUserScehma);
