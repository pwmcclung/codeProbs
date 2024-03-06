function replaceNth(text, n, oldValue, newValue) {
    let arr = text.split('')
    let newArr = [];
    let count = 0
    for (let i = 0; i< arr.length; i++){
     if (arr[i] != oldValue){
       newArr.push(arr[i])
     }else if (arr[i] == oldValue){
       count += 1;
       if (count == n){
         newArr.push(newValue);
         count = 0;
       }else{
         newArr.push(arr[i]);
       }
     }
    }
   return newArr.join('');
  }