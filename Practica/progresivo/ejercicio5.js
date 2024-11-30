// Crea una función que tome un array de números y un número como umbral, y devuelva un array con los números mayores a ese umbral.

//Después de 1 año.
const mayorUmbral = (array, umbral) => {
    return array.filter(num => num > umbral);
}

//Cuando empecé.
// function mayorUmbral(array, umbral){
//     let arrayAccesorio = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > umbral){
//             arrayAccesorio.push(array[i]);
//         }
//     }
//     return arrayAccesorio;
// }

console.log(mayorUmbral([1,2,3,4,5,6,7,8,9], 6))