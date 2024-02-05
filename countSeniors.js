var countSeniors = function(details) {
    let count = 0;
    for (let i = 0; i < details.length; i++){
        age = details[i].slice(11, 13);
        if (Number(age) > 60){
            count++;
        }
    }
    return count;
};