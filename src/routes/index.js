const express = require("express");
const path = require("path");
const fs = require('fs');
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {title:"Página principal"});
});

router.get("/formulario", (req, res) => {
  res.render("formulario", {title:"formulario",});
});

module.exports = router;
