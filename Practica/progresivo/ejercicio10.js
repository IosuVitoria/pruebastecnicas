// Ejercicio 10: Encontrar el Mayor en un Array de Objetos
// Dado un array de objetos que representan personas (con propiedades nombre y edad), encuentra la persona con mayor edad.

let personas = [
    {
        nombre: "Iosu",
        edad: 39
    },
    {
        nombre: "Aiur",
        edad: 2
    },
    {
        nombre: "Vero",
        edad: 37
    },
    {
        nombre: "Izaro",
        edad: 55
    }
]


const masMayorArray = (array) => {
    let elemento = array[0];
    for(const persona of array){
        if(persona.edad > elemento.edad){
            elemento = persona;
        }
    }
    console.log(elemento);
}

masMayorArray(personas);