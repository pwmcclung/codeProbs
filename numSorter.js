var sortSentence = function(s) {
    const arr = s.split(' ');
    const sorter = (a, b) => {  
       return a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0);
    };
    let newArr = arr.sort(sorter);
    let newArr2 = [];
    for (let i = 0; i < newArr.length; i++){
        newArr2.push(newArr[i].slice(0, newArr[i].length-1));
    } 
    return newArr2.join(' ');
 };