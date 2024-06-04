function missingValues(arr) {
    let numCounts = {};
    for (let i = 0; i < arr.length; i++){
      if (numCounts[arr[i]]){
        numCounts[arr[i]]++;
      }else{
        numCounts[arr[i]] = 1;
      }
    }
    let one = Number(Object.keys(numCounts).find(x=> numCounts[x] == '1'));
    let two = Number(Object.keys(numCounts).find(y=> numCounts[y] == '2'));
    let ans = one * one * two;
   return ans;
  }