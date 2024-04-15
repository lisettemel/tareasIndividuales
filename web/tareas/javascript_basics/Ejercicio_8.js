function duplicados(array) {
	var conjunto = new Set(array);
	// Nuevo a un array
 	var sinDuplicados= Array.from(conjunto);
 	return sinDuplicados;
}
