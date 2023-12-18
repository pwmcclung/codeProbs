function binaryToString(binary){
    let arr = binary.split('0b');
    let newArr = [];
    for (let i = 1; i < arr.length; i++){
      newArr.push(String.fromCharCode((parseInt(arr[i], 2))))
    }
    return newArr.join('');
    }