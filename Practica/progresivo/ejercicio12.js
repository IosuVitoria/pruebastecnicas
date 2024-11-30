// Factorial
// Escribe una función que calcule el factorial de un número (ej., 5! = 5 × 4 × 3 × 2 × 1 = 120).

const factorial = (n) => {
    let resultado = 1;
    for(let i = n ; i > 1; i--){
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));