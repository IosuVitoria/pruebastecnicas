// Ejercicio 4: Suma de un Array
// Escribe una función que tome un array de números y devuelva la suma de sus elementos.

const sumArray = (array) =>{
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}

console.log(sumArray([1,2,3,4,5,6,7,8,9]));