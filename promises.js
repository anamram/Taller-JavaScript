const exito = new Promise ((resolve) => {
    // Código y operaciones que se ejecutan de manera asíncrona

setTimeout(() => {
    resolve({ id: 1. nombre: "Ana"})

}, 1000)
})

exito.then((dato) => {

    console.log(dato)
})