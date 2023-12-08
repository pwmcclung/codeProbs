var solution = function(firstArray, secondArray) {
    let newArr = [];
     for (let i = 0; i < firstArray.length; i++){
       newArr.push((Math.abs(firstArray[i]-secondArray[i]) ** 2));
     }
    let summed = newArr.reduce((a,b) => a + b, 0);
     let avg = summed / firstArray.length;
     return avg;
   }