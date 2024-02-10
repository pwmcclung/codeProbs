function productArray(numbers){
    let newArr = [];
    let count = numbers.length;
    while (count > 0){
      let first = numbers.shift();
      newArr.push(numbers.reduce((a,b) => a * b, 1));
      numbers.push(first);
       count--;
    }
   return newArr;
  }