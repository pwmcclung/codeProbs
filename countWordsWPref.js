var prefixCount = function(words, pref) {
    let count = 0;
    let len = pref.length;
    for (let i = 0; i < words.length; i++){
        let sliceWord = words[i].slice(0, len);
        if (sliceWord == pref){
            count++;
        }
    }
    return count;
};