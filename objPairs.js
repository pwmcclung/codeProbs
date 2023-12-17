function solution(pairs){
    let arr1 = Object.keys(pairs);
    let arr2 = Object.values(pairs);
    let sent = [];
   for (let i = 0; i < arr1.length; i++){
     sent.push(`${arr1[i]} = ${arr2[i]}`);
   }
     return sent.join(',');
   }