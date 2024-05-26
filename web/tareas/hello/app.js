"use strict";

import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const port = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

let cards = [];

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, 'public/html/hello.html'), 'utf-8');
    res.status(200).send(file);
});

app.get("/hello", (req, res) => {
    const salute = "Hello from server";
    res.status(200).send(salute);
});

app.get("/hello/:name", (req, res) => {
    console.log(req.params);
    const salute = `Hello ${req.params.name}!!`;
    res.status(200).send(salute);
});

app.post('/cards', (req, res) => {
    console.log(req.body);
    res.status(200).send("Card added successfully");
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
