
function capitalizar(cadena) {
    // Separa las cadenas por espacio
    const palabras = cadena.split(' ');
    
    for (let i = 0; i < palabras.length; i++) {
        // Capitaliza la primera letra de cada palabra
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
    }
    
    // Unir las palabras por espacio
    return palabras.join(' ');
}

