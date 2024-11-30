// Ejercicio 7: Crear un Objeto
// Crea un objeto que represente a una persona con las propiedades nombre, edad y un método saludar que imprima un saludo personalizado.

const HolaMundoObj = {
    nombre: "Iosu",
    edad: 39,
    saludo(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años y este es un método dentro de objeto.`)
    }
}

HolaMundoObj.saludo()