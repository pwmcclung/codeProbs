var checkIfPangram = function(sentence) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let arr = sentence.split('');
    let unique = [...new Set(arr)].sort().join('');
    if (unique == alpha){
        return true;
    }
    return false;
   
};