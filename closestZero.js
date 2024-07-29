function closest(arr){
    if (arr.includes(0)){
      return 0;
    };
   arr.push(0)
   let newArr = arr.sort((a,b)=>a-b, 0);
   if (newArr.indexOf(0) == 0){
       return newArr[1];
     }else if(newArr.indexOf(0) == newArr.length - 1){
       return newArr[newArr.length -2];
     }else{
        let newestArr = newArr.slice(newArr.indexOf(0)-1, newArr.indexOf(0)+2);
       if (newestArr[0] + newestArr[newestArr.length-1] == 0){
         return null;
       }else{
         let first =  Math.abs(newestArr[0]) - 0;
         let second = newestArr[newestArr.length -1] - 0;
         if (first < second){
           return newestArr[0];
         }else{
           return newestArr[newestArr.length -1];
         }
       }
     }
   }