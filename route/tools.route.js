const express = require("express");
const toolsControllers = require("../controllers/tools.controllers");
const router = express.Router();

router
  .route("/")
  .get(toolsControllers.getAllTools)
  .post(toolsControllers.saveATools);

module.exports = router;
