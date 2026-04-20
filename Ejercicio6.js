function suma (a, b){
    return a + b
}
function resta (a, b){
    return a - b
}
function multiplicar(a, b){
    return a*b
}

//funcion asincrónica. Para cambiar una función sincrónica a asyn es poner async
function dividir (a, b){
    if (b ===0) {
        console.log("Error: No se puede dividir por cero")
        return null
    }    else {
        return a / b
}
}

let resultadoSuma = dividir (5, 0)

console.log('El resultado de la suma es:', resultadoSuma)

// se llaman dentro de otros metodos porque se puede llamar como parametros para ejecutar solo una vez
// Son funciones de un solo uso => indica que es una función anónima
//Las funciones están atadas a parametros

let divisinAnonima = (a, b) => {
    if (b ===0){
        console.log('Error')
        return null
        
    }
    return a/b
}
    
let operaconDiv = divisiona

console.log('Esta es una función anónima')
