function removeDuplication(arr){
    let newArr = arr.filter((x) => arr.indexOf(x) == arr.lastIndexOf(x));
     return newArr;
   }
   