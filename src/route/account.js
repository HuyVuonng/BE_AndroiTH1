const express = require("express");

const router = express.Router();
const accountController = require("../app/controller/AccountController");

router.get("/", accountController.getAllAccounts);
router.post("/createAccount", accountController.create);

module.exports = router;
