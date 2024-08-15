function total(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      if (checkPrime(i)){
        sum += arr[i];
      }
    }
     return sum;
   };
   function checkPrime(num, div = 2) {
       if (num <= 1) {
           return false;
       }
       if (div > Math.sqrt(num)) {
           return true;
       }
       if (num % div === 0) {
           return false;
       } 
       else {
           return checkPrime(num, div + 1);
       }
   }