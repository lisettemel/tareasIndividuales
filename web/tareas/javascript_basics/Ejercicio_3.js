// Invierte un arreglo de numeros y devuelve un arreglo nuevo
function invertir(array) {
    const nuevoA = [];
    for (let i = array.length - 1; i >= 0; i--) {
        nuevoA.push(arr[i]);
    }
    return nuevoA;
}

// Función que modifica el mismo arreglo que se pasa como argumento
function invertirA(array) {
    let inicio = 0;
    let fin = array.length - 1;
    while (inicio < fin) {
        // intercambia 
        const temp = array[inicio];
        array[inicio] = arrar[fin];
        array[fin] = temp;
        // Va al inicio del arriglo
        inicio++;
        fin--;
    }
}
