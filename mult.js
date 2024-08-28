multiplicationTable = function(size) {
    let arr = [];
    for (let i = 1; i <= size; i++){
      let newArr = [];
      for (let j = 1; j <= size; j++){
        newArr.push(i * j);
      }
      arr.push(newArr);
    }
    return arr;
    }