function keywordCipher(string, keyword){
    let strArr = string.split(' ');
    let keywordArr = keyword.split('');
    let newKw = keywordArr.filter((value, index) => keywordArr.indexOf(value) === index);
    let alphaArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newkwArr = newKw.concat(alphaArr.filter((x) => !newKw.includes(x)));
    let arr = [];
    let object = alphaArr.reduce((acc, element, index) => {
          return {
              ...acc,
              [element]: newkwArr[index],
          };
      }, {});
    if (strArr.length > 1){
      for (let i = 0; i < strArr.length; i++){
        let word =  strArr[i].toLowerCase().split('')
        let newWord = word.map((x)=> object[x] || '').join('');
        arr.push(newWord);
      }
      return arr.join(' ');
    }else{
    let stringList = string.toLowerCase().split('');
    let newWord = stringList.map((x)=> object[x] || '');
    return newWord.join(''); 
    }
    }