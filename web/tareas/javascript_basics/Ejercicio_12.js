function calcularMedianaModa(listaNumeros) {
    	// Ordenamos la lista de números de menor a mayor
    	listaNumeros.sort((a, b) => a - b);

    	// Mediana
    	var mediana;
    	var mitad = Math.floor(listaNumeros.length / 2);
    	if (listaNumeros.length % 2 === 0) {
        	mediana = (listaNumeros[mitad - 1] + listaNumeros[mitad]) / 2;
    	} 
	else {
        	
        	mediana = listaNumeros[mitad];
    	}

    	// Moda
    	var conteo = {};
    	listaNumeros.forEach(num => {
        	conteo[num] = (conteo[num] || 0) + 1;
    	});
    	var moda = [];
    	var maxFrecuencia = 0;
    	for (var num in conteo) {
        	if (conteo[num] > maxFrecuencia) {
            	moda = [parseInt(num)];
            	maxFrecuencia = conteo[num];
        } 
	else if (conteo[num] === maxFrecuencia) {
            	moda.push(parseInt(num));
        }
    	}

    return { mediana: mediana, moda: moda };
}
