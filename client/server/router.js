const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("server is up and running");
  // res.header("Access-Control-Allow-Origion","*"); // or specify your domain i.e localhost://5000
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  // next();
});

module.exports = router;
