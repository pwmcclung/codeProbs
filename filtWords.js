var countWords = function(words1, words2) {
    let filtWords1 = words1.filter(function(item){return words1.lastIndexOf(item) == words1.indexOf(item)});
    let filtWords2 = words2.filter(function(item){return words2.lastIndexOf(item) == words2.indexOf(item)});
    let newArr = filtWords1.filter((x) => filtWords2.includes(x));
    return newArr.length;
};