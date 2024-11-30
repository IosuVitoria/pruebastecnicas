// Ejercicio 8: Contar Propiedades
// Escribe una función que tome un objeto y devuelva el número de propiedades que tiene.

const objetoPrueba = {
    nombre: "Iosu",
    apellido: "Gómez",
    edad: 39
}

const cuentaObjectProperties = (obj) => {
    return Object.keys(obj).length;
   
}

console.log(cuentaObjectProperties(objetoPrueba));