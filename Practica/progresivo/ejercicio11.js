// Palíndromo
// Crea una función que determine si una palabra es un palíndromo (se lee igual al derecho y al revés).

const esPalindromo = (string) => {
    return string === string.split("").reverse().join("");
}

console.log(esPalindromo("ana")); 
console.log(esPalindromo("hola"));