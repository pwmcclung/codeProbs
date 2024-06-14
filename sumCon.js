function sumConsecutives(s) {
    let arr = [];
    let newArr = [];
     while (s.length > 0){
       let first = s.shift();
       arr.push(first);
       if (first != s[0]){
         newArr.push(arr);
         arr = [];
       }
     }
     let finalArr = [];
     for (let x of newArr){
       finalArr.push(x.reduce((a,b) => a + b));
     }
     return finalArr;
   }