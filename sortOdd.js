function sortArray(array) {
    let copyArr = array.slice();
    let oddArr = [];
    for (let i = 0; i < copyArr.length; i++){
      if (copyArr[i] % 2 !== 0){
        oddArr.push(copyArr[i]);
        copyArr[i] = '*';
      }
    }
    let arr = oddArr.sort((a,b) => a - b);
   
    for (let i = 0; i < copyArr.length; i++){
      if (copyArr[i] == '*'){
        copyArr[i] = arr.shift();
      }
    }
    return copyArr;
  }