function obtenerUsuario(id) {
    return new Promise ((resolve, reject) => {
        if (id <= 0){
            reject( new Error("id invalido"))
        return
        }
        setTimeout(() => {
            resolve({ id, nombre:"Usuario"})
        }, 1000)
    })
}

obtenerUsuario(1).then((u)=>{
    console.log("Paso 1, Then:", u)
    return u.nombre.toUpperCase()
    }). then((nombre) => {
        console.log('paso 2 operando con el return anterior', nombre)
    })
        .catch((error) => {
            console.log("error obteniendo el id", e.message)   
    })
    .finally(() => {
        console.log("siempre ejecutamos al final")
    })