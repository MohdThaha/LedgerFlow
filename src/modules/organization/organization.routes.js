const express = require("express");
const {
  createClientController,
} = require("./organization.controller");

const router = express.Router();

router.post("/create-client", createClientController);

module.exports = router;
