function cleanString(s) {
    let newArr = s.split('');
    for (let i = 0; i < newArr.length; i++){
      if (newArr[i] == '#'){
        newArr[i] = '';
        newArr[i-1] = '';
        newArr = newArr.filter(x=> !x == '');
        i = i - 2;
      }
    }
    let newS = newArr.join('');
    return newS;
  }