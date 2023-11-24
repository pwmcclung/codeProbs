function solve(str){
    let newStr = str.slice().split('').reverse().join('').replace(/\s/g, "");
   let newStrArr = newStr.split('');
   let newArr = [];
   for (let i = 0; i < str.length; i++){
     if (str[i] == ' '){
       newArr.push(' ');
     }else{
       newArr.push(newStrArr.shift());
     }
   }
 return newArr.join('');
 }