var findWordsContaining = function(words, x) {
    let arr = [];
    for (let i = 0; i < words.length; i++){
        let word = words[i];
        if (word.includes(x)){
            arr.push(i);
        }
    }
    return arr;
};