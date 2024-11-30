// Ejercicio 9: Transformar un Array en un Objeto
// Escribe una función que reciba un array de palabras y las convierta en propiedades de un objeto con valores true.

const arrayToObj = (array) => {
    let obj = {};
    for(const element of array){
        obj[element] = true;
    }
    console.log(obj);
}


arrayToObj(["Hola", "Adios", "Ya"])