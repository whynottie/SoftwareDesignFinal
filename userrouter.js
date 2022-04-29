const express = require("express");
const router = express.Router();
//const {check} = require("express-validator");
const userControl = require("../controllers/user");

router.get("/", userControl.gatherAllLogin);

router.post("/register", userControl.validate("createUser"), userControl.registration);

router.post("/loginn", userControl.validate("loginUser"), userControl.login);

router.get("/:idd/profile", userControl.getID);

router.post("/:idd/fillprofile", userControl.validate("fillProfile"),userControl.fillProfileForm);

module.exports = router;