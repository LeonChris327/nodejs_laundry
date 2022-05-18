const express = require("express");
const router =  new express.Router();
const controller = require('../controllers/authentication.controller');

router.post("/login", controller.login);
//router.get("/logout", controller.logout);

module.exports = router;