function corta(arr) {
	//Valor de la primera cadena
	var longitudMin = arr[0].length;

	for (var i = 1; i < arr.length; i++) {
        	// Actualizamos la longitud mínima
        	if (arr[i].length < longitudMin) {
            		longitudMin = arr[i].length;
        	}
    	}

	return longitudMinima;
}
