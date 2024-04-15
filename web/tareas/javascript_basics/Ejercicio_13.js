function frecuente(listaCadenas) {
    var conteo = {}; // Almacenar la frecuencia 

    listaCadenas.forEach(cadena => {
        conteo[cadena] = (conteo[cadena] || 0) + 1;
    });

    var maxFrecuencia = 0;
    var frecuente;

    // Encontramos la cadena con la mayor frecuencia
    for (var cadena in conteo) {
        if (conteo[cadena] > maxFrecuencia) {
            maxFrecuencia = conteo[cadena];
            frecuente = cadena;
        }
    }

    return frecuente;
}
