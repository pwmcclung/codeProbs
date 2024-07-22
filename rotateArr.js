function rotate(array,n){
    if(n == 0){
      return array;
    }else if (n < 0) {
       //go left
      return goLeft(array,n);
     }else if ( n > 0){
       // go right
       return goRight(array,n);
   }
   }
   function goRight(arr, n){
     let newArr = [...arr];
     let count = 0;
     while(count < n){
       let first = newArr.pop();
       newArr.unshift(first);
       count++;
     }
     return newArr;
   }
   function goLeft(arr, n){
     let newArr = [...arr];
     while (n <0){
       let first = newArr.shift();
       newArr.push(first);
       n++;
     }
     return newArr;
   }