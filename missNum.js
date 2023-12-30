function findMissingNumbers(arr){
    let min = Math.min(...arr);
     let max = Math.max(...arr);
     let newArr = [];
     for (let i = min; i < max; i++){
       newArr.push(i);
     }
     return newArr.filter(x=>!arr.includes(x));
   }