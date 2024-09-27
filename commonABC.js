function common(a,b,c){
    let sum = 0;
     let sortedA = a.sort((a,b)=> a - b);
     let sortedB = b.sort((a,b)=> a - b);
     let sortedC  = c.sort((a,b)=> a - b);
     let lenA = sortedA.length; 
     let lenB = sortedB.length;
     let lenC = sortedC.length;
     let i = 0; 
     let j = 0;
     let k = 0;
     while (i < lenA && j < lenB && k < lenC){
       if (sortedA[i] == sortedB[j] && sortedB[j] == sortedC[k]){
         sum += sortedA[i];
         i++;
         j++;
         k++;
       }else if (sortedA[i] < sortedB[j]) {
         i++;
       }else if (sortedB[j] < sortedC[k]){
         j++;
       }else{
         k++;
       }
     }
     return sum;
     
   }