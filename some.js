var countConsistentStrings = function(allowed, words) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let newLetters = letters.split('').filter((x) => !allowed.includes(x));
    let count = 0;
    for (let i = 0; i < words.length; i++){
        let wordSplit = words[i].split('');
        if (newLetters.some(r=>wordSplit.includes(r))){
            count += 0;
        }else{
            count += 1;
        }
    }
    return count;
  };