function pairs(ar){
    let count = 0;
    if (ar.length % 2 != 0){
      ar.pop();
    }
     while (ar.length > 0){
       let first = ar.shift();
       let second = ar.shift();
       let biggest = Math.max(first, second);
       let smallest = Math.min(first, second);
       if (biggest - smallest == 1){
         count ++;
       }
     }
     return count;
   };