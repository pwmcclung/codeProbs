function lottery(str){
    let newArr = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++){
      if (Number(arr[i])|| arr[i] == '0'){
        newArr.push(arr[i])
      }
    }
    let arr1 = [...new Set(newArr)].join('');
    return arr1 || 'One more run!';
  }