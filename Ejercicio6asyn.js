async function suma (a, b){
    return a + b
}
async function resta (a, b){
    return a - b
}
async function multiplicar(a, b){
    return a*b
}

//funcion asincrónica. Para cambiar una función sincrónica a asyn es poner async
async function dividir (a, b){
    if (b ===0){
        setTimeout(() =>{
                return 'Error: No se puede dividir por cero')
                }, 1000)
    } else {
        return a/b
}
}

let resultadoSuma = await suma (5, 0);
let resultadoDivision = await dividir (10,0);
let resultadoResta = await restar(10,5);
let resultadoMultiplicacion = await 

console.log('El resultado de la suma es:', resultadoSuma);
console.log('El resultado de la suma es:', resultadoDivision);
console.log('El resultado de la suma es:', resultadoResta);




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

// await: espera que el tiempo de la promesa pase. Y una vez pasa el tiempo nos deja saber la promesa
//La línea del console.log no se imprime hasta que la línea de la suma