function getEvenNumbers(start, end){
    let array = [];
    if(end <= start){
        return array;
    }else{
        for(let i = start; i <= end; i++){
            if(i%2 == 0){
                array.push(i);
            }
        }
        return array;
    }
}

console.log(getEvenNumbers(3, 9));  
console.log(getEvenNumbers(10, 20)); 
console.log(getEvenNumbers(5, 5));   
console.log(getEvenNumbers(6, 6));   
console.log(getEvenNumbers(8, 2)); 