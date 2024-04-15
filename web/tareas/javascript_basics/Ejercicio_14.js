function potencia(numero) {
    // numero es mayor que 0 y si tiene solo un bit establecido
    return numero > 0 && (numero & (numero - 1)) === 0;
}
