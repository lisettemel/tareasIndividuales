function palindromo(array) {
    //
 Eliminamos los espacios en blanco y convertimos a minuscula
    array = array.toLowerCase().replace(/\s/g, '');
    var longitud = array.length;
    // Mitad de la cadena
    for (var i = 0; i < longitud / 2; i++) {
        // Comparamos actual con su opuesto
        if (array[i] !== array[longitud - 1 - i]) {
            // Si no son iguales, la cadena no es un palíndromo
            return false;
        }
    }
    // Si llegamos aquí, la cadena es un palíndromo
    return true;
}
