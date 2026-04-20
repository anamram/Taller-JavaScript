const nombres = ['Andres', 'Juan', 'Carlota'];

nombres.forEach(
    (valorElemento, indice, arreglo)=>
        {
            console.log('Saludo a:', valorElemento);
            console.log('Indice del elemento:', indice);
            console.log('El arreglo mide:', arreglo);
        })


//Todas las colecciones puede usan el metodo foreach, map, filter
// Foreach para cada colección de nombres saludarlos
// Foreach se puede manejar hasta tres parametros (valorElemento, indice, arreglo)
// ValorElemento se le puede dar cualquier nombre
//Foreach es más eficiente que un for