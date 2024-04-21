function add(arr) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
        newArr.push(sum);
    }
    return newArr;
  }