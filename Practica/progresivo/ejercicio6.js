// Escribe una función que cuente cuántas veces aparece un valor específico en un array.

const arrayCount = (array, element) => {
    let count = 0;
    for(const el of array){
        element === el ? count++ : count
    }
    return count;
}

console.log(arrayCount([1,2,3,4,4,4], 4));