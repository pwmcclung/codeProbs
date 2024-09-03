function rotate(str){
    let arr = str.split('');
     let count = 0;
     let newArr = [];
     while (count < arr.length){
       let first = arr.shift();
       arr.push(first);
       let newWord = arr.join('');
       newArr.push(newWord);
       count++;
     }
     return newArr;
   }