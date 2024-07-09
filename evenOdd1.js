function EvenOdd(arr){
    let count = 0;
     let sum = 0;
     for (let i = 0;i < arr.length; i++){
       if (count % 2 == 0){
         sum += arr[i];
         count++;
       }else if (count % 2 != 0){
         sum *= arr[i];
         count++;
       }
   }
       return sum;
     }