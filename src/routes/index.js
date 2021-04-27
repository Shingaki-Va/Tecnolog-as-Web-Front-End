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

router.get("/enlaces", (req, res) => {
  res.render("enlaces", {title:"enlaces",});
});

router.get("/acerca_de", (req, res) => {
  res.render("acerca_de", {title:"acerca_de",});
});

router.get("/estructuras", (req, res) => {
  res.render("estructuras", {title:"estructuras",});
});


router.get("/etiquetas", (req, res) => {
  res.render("etiquetas", {title:"etiquetas",});
});

router.get("/audio", (req, res) => {
  res.render("audio", {title:"audio",});
});

router.get("/video", (req, res) => {
  res.render("video", {title:"video",});
});


module.exports = router;
