import express from "express";

const app = express();
const port = process.env.PORT ?? 3000;
let cards = [
    {
        "id": 1,
        "type": "Proteina",
        "name": "Huevo",
        "value": 6
    }, 
    {
        "id": 2,
        "type": "Utencilio",
        "name": "Cuchara de Madera",
        "value": 3
    },
    {
        "id": 3,
        "type": "Verdura",
        "name": "Ensalada",
        "value": 3
    }
]

app.use(express.json());

app.listen(port, () => { 
    console.log(`Running on port ${port}`);

});



app.post('/verificar_cartas', (req, res) => {
    if (cards.length === 0) {
        res.status(400).send("No hay cartas disponibles");
    } else {
        res.status(200).json(cards);
    }
   
});

app.get('/carta/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const carta = cards.find(card => card.id === id);  

    if (!carta) {
        res.status(400).send("No se encontro la carta");
    } else {
        res.status(200).send(carta);
    }
});

app.post('/agregarCartas', (req, res)=>{
    const carta = req.body;
    const cartaExistente = cards.some(card => carta.id === card.id);
    if(cartaExistente){
        res.status(400).send("La carta ya exite");
    }
    else{
        cards.push(carta);
        res.status(200).send("Se agrego correctamente")
    }
    
});

app.delete('/eliminarCarta/:id', (req, res) => {

    const id = req.params.id;
    const index = cards.findIndex(card => id === card.id);

    if(index !== -1){
        cards.splice(index, 1);
        res.status(200).send("La carta se elimino correctamente")
    }
    else{
        res.status(400).send("No se encontro la carta que quieres eliminar")
    }

});

app.put('/actualizaCarta/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const actualizar = req.body;
    const carta = cards.find(carta => carta.id === id);

    if(carta){
        Object.keys(actualizar).forEach(key => {
            carta[key] = actualizar[key];
        });
        res.status(200).send("Carta actualizada correctamente");

    }
    else{
        res.status(400).send("Carta no encontrada");
    }
});

