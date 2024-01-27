var mostWordsFound = function(sentences) {
    let lenArr = [];
    for (let i = 0; i < sentences.length; i++){
       let senCount =  sentences[i].split(' ');
        lenArr.push(senCount.length);
    }
    lenArr.sort((a,b)=> a - b);
    return lenArr[lenArr.length-1];
};