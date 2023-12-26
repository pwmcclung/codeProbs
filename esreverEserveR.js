function esrever( str ){
    let punct = str.slice(str.length-1);
     let newStr = str.slice(0, str.length-1).split(' ').reverse();
     let newArr = [];
     for (let i = 0; i < newStr.length; i++){
       newArr.push(reverser(newStr[i]));
     }
     
    return newArr.join(' ') + punct;
   }
   
   function reverser(word){
     let arr = word.split('').reverse().join('');
     return arr;
   }