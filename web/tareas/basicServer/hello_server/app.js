"use strict"

import express from "express";
//import { port } from "pg/lib/defaults";



const app = express(); // crear aplicacion del servidor
const port = process.env.port ?? 3000;
let card_list = [];

//programa que funciona en medio del software y permite procesar los menajes del jason
app.use(express.json())

app.get("/name", (requ, res) => {

    const salute = "Hello from server"
    console.log(req.query);
    res.status(200).send(salute)
        
});

app.get("/hello/:name", (req, res) => {
    console.log(req.params)
    const salute = `Hello ${req.params.name}!!`
    res.status(200).send(salute)
});

app.post('/cards', (req, res) => {
    console.log(req.body)
    card_list.push(req.body)
    res.status(200).send("All is good")
});

app.listen(port, () => { 
    console.log(`Running on port ${port}`);

});
