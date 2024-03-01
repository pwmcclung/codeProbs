var isSumEqual = function(firstWord, secondWord, targetWord) {
    let wordsDict = {'a':0, 'b':1,'c':2, 'd':3, 'e':4, 'f':5, 'g':6, 'h':7, 'i':8, 'j':9};
    let arr1 = Number(firstWord.split('').map(x=> wordsDict[x]).join(''));
    let arr2 = Number(secondWord.split('').map(x=> wordsDict[x]).join(''));
    let arr3 = Number(targetWord.split('').map(x=>wordsDict[x]).join(''));
    if (arr1 + arr2 == arr3){
        return true;
    }
    return false;

};