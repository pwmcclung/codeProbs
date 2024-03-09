function solve(arr) {
    let arr1 = arr.slice();
    let newArr = [];
    while(arr1.length >0){
      let first = arr1.shift();
      if (arr1.every((x)=> first > x)){
          newArr.push(first)
          }
    }
    return newArr;
  }