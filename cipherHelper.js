function SubstitutionCipher(abc1, abc2) {
    let arr1 = abc1.split('');
    let arr2 = abc2.split('');
    this.encode = function (str) {
      let strArr = str.split('');
      let newArr = [];
      for (let i = 0; i < strArr.length;i++){
        if (arr1.includes(strArr[i])){
          newArr.push(arr2[arr1.indexOf(strArr[i])])
        }else{
          newArr.push(strArr[i])
        }
      }
      return newArr.join('');
    }
    this.decode = function (str) {
      let strArr = str.split('');
      let newArr = [];
      for (let i = 0; i < strArr.length;i++){
        if (arr2.includes(strArr[i])){
          newArr.push(arr1[arr2.indexOf(strArr[i])])
        }else{
          newArr.push(strArr[i])
        }
      }
      return newArr.join('');
    }
  }