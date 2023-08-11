const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "hvdvay6ert72839289aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj";

const UsrRoutes = require("./routes/logUrouts.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = 4000;

app.use("/api", UsrRoutes);

// app.use("/public", express.static(path.join(__dirname, "public")));

const mongoUrl =
  "mongodb+srv://lanjewarvaibhav56:VaibhavLanjewar12345@cluster0.phq7pcx.mongodb.net/Rest_Api_Auth?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("MongoDB connection error:", error);
});
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
