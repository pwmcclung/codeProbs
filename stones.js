function solve(stones) {
    let count = 0; 
     if (stones == ''){
       return 0;
     }
     let arr = stones.split('');
     for (let i = 0; i < arr.length; i++){
       if (arr[i] == arr[i+1]){
         count++;
       }
     }
     return count;
   }