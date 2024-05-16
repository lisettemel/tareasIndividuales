"use strict";

import express from "express";

import fs from "fs";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/web", (req, res) => {
    const file = fs.readFileSync("public/html/index.html", "utf8");
    res.status(200).send(file);
  })

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });