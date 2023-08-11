const express = require("express");
const router = express.Router();
const logController = require("../Controller/loginController");

router.post("/signUp", logController.createUser);
router.post("/login", logController.loginUser);
router.post("/userDetail", logController.loginUserData);
router.post("/deleteUser", logController.deletUser);
router.get("/getAllUser", logController.getAllUser);
router.get("/updateUser", logController.updateUser);

module.exports = router;