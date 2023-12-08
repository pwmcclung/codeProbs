function anagramDifference(w1,w2){
    let arr1 = Array(26).fill(0);
    let arr2 = Array(26).fill(0);
    let ele = 0;
   
    while (ele < w1.length){
      arr1[w1[ele].charCodeAt() - 97 ] += 1;
      ele += 1;
    };
   
    ele = 0;
   
   while (ele < w2.length){
     arr2[w2[ele].charCodeAt() - 97] += 1;
     ele +=1;
   }
   let final = 0;
   
   for (let j = 0; j < 26; j++){
     final += Math.abs(arr1[j] - arr2[j]);
   }
   
   return final;
 }


 