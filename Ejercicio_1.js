
function contadorCadena(cadena) {
    // Lsita de contador
    const contador = {};

    // Cuenta las ocurrencias de cada caracter
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        // Incrementamos  contador
        contador[caracter] = (contador[caracter] || 0) + 1;
    }

    // Encontrar el primer carácter no repetido
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        // Aumenta si no se repite
        if (contador[caracter] === 1) {
            return caracter;
        }
    }

    
    return null;
}

// Main
const cadena = 'abacddbec';
const contadorCadena = contadorCadena(cadena);
console.log('El primer carácter no repetido es:', contadorCadena);

