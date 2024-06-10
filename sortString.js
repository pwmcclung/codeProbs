function sortTheInnerContent(words){
    let wordArr = words.split(' ');
    let arr = [];
    for (let i = 0; i < wordArr.length; i++){
      if (wordArr[i].length > 1){
        arr.push(wordBuilder(wordArr[i]));
      }else{
        arr.push(wordArr[i]);
      }
    }
    return arr.join(' ');
  }
  
  function wordBuilder(word){
    let arr = word.split('');
    let len = arr.length; 
    let first = String(arr[0]);
    let last = String(arr[arr.length - 1]);
    let middle = arr.slice(1, len-1);
    let midSort = String(middle.sort().reverse().join(''));
    let newWord = first + midSort + last;
    return newWord;
  }