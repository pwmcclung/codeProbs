var interpret = function(command) {
    let newStr = '';
    let wordSplit = command.split('');
    for (let i = 0; i < wordSplit.length; i++){
        if (wordSplit[i] == 'G'){
            newStr += 'G';
        }
        if (wordSplit[i] == '(' && wordSplit[i + 1] == ')'){
            newStr += 'o';
        }
        if (wordSplit[i] == '(' && wordSplit[i + 1] == 'a' && wordSplit[i + 2]  == 'l' && wordSplit[i + 3]  == ')'){
            newStr += 'al';
        }
    }
    return newStr;
};