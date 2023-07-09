function findUnique(numbers) {
    let num = numbers.reduce((x,y) => x ^ y);
    return num;  
}