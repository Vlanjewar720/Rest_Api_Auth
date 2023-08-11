const User = require('../models/newSchema');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj";

exports.createUser = async (req, res) => {
    const { fname,lname,email,password,userType } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
            try {   
                const oldUser = await User.findOne({ email });

                if (oldUser) {
                  return res.json({ error: "User Exists" });
                }
              await User.create({  fname,lname,email,password: encryptedPassword,userType});
            res.send({ status: "ok" });
            console.log({ status: "ok" });
            } catch (error) {
            res.send({ status: "error" });
            console.log(error);
            }
 };


 exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    const decode = bcrypt.compare(password, user.password)
    if (decode) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "1h",
      });
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  };


  exports.loginUserData = async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const useremail = user.email;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) { }
  };
  


 exports.getAllUser = async (req, res) => {
    try {
      const allUser = await User.find({});
      res.json({ status: "ok", data: allUser });
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };


  exports.deletUser = async (req, res) => {
    const { userid } = req.body;
    try {
        User.findOneAndDelete({ _id: userid }, function (err, res) {
        console.log(err);
      });
      res.send({ status: "Ok", data: "Deleted" });

    } catch (error) {
      console.log(error);
    }
  };

  // Update User Data

  exports.updateUser = async (req,res) => {
    const {id} = req.params;
    const data = req.body;
    try {
      const user = await User.findOneAndUpdate({ _id: id }, data);
      // const newtoken = loginToken(user)
      if (!user) {
        res.status(404).json({ message: 'user Not Found'});
      } else {
        res.status(200).json({
              // newtoken,
              data: {
                user
              }

        });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};


