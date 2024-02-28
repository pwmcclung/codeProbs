var isAcronym = function(words, s) {
    let newStr = '';
    for (let i = 0; i < words.length; i++){
        let word = words[i];
        newStr += String(word[0]);
    }
    if (newStr == s){
        return true;
    }else{
        return false;
    }
};