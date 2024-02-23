var reversePrefix = function(word, ch) {
    if (word.includes(ch)){
        let arr = word.split('');
       let firstPart = arr.slice(0, arr.indexOf(ch)+1).reverse().join('');
       let secondPart = arr.slice(arr.indexOf(ch)+1,).join('');
       return firstPart + secondPart; 
    }else{
        return word;
    }
};