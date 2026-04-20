function fibonacci(n) {
    if (n===0) return 0
    if (n===1) return 1
    let anterior = 0
    let actual = 1
    for (let i= 2; i < n; i++) {
        const siguiente = anterior 
    }
        return actual
}

function fibnacciAsincrono(n){
    return new Promise((resolve, reject)=> {
        if (!Number.isInteger(n) || n < 0) {
            reject(new Error('n debe ser un número entero >= 0'))
            return
        }
        setTimeout(()=>{
            const resultado = fibonacci(n)
            resolve(resultado)
        }, 0)
    })
}

console.log(fibonacci('Preparando para ejecutar fibonacci')
const promesaFibonacci = fibnacciAsincrono(500)

console.log('Fibonacci no me bloquea')

promesaFibonacci
    .then((valor)=> console.log(('fibonacci asincrono:', valor))
    .catch((err) => console.log('Hubo un error al calcular fibonacci:', err.message))
console.log()