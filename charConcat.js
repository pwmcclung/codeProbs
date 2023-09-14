function charConcat(string){
    let arr = string.split('');
     let newArr = [];
     for (let i = 1; i <= arr.length / 2; i++){
       newArr.push(arr[i-1]);
       newArr.push(arr[arr.length-i]);
       newArr.push(i);
     }
     
     return newArr.join('');
   }