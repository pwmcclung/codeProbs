function maxPossibleScore(obj, arr) {
    let newArr = arr.map(String);
     let score = 0;
     for (let x in obj){
       if (newArr.includes(x.toString())){
         obj[x] *= 2;
       }
         score += obj[x];
     }
     return score;
   }