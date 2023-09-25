function hasDuplicateValue(array){
    let steps = 0; 
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            steps++;
            if (i !== j && array[i] === array[j]){
                return true;
            }
        }
    }
    console.log(steps);
    return false;
}