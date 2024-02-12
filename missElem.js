function findMissing(arr1, arr2) {
    let sortArr1 = arr1.sort((a,b) => a-b,0);
    let sortArr2 = arr2.sort((a,b)=> a-b, 0);
    for (let i = 0; i < sortArr1.length; i++){
      if (sortArr1[i] != sortArr2[i]){
        return sortArr1[i];
      }
    }
    }
    