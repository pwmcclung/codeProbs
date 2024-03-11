function holidayCount (a1, a2){
    let arr1 = a1.filter((x) => typeof x == 'number' && x % 1 == 0);
    let arr2 = a2.filter((x) => typeof x == 'number' && x % 1 == 0);
     let numArr1 = Number(arr1);
     let numArr2 = Number(arr2);
     if (numArr1 > 0  && numArr2 >0){
       if (numArr1 > numArr2) {
       return 'Right';
     }else if (numArr1 < numArr2){
       return 'Wrong';
     }else if (numArr1 == numArr2){
       return 'Same';
     }
     } else {
       return 'Not possible';
     }
   }