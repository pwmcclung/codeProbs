function distancesFromAverage(arr){
    let arrSum = arr.reduce((a,b) => a + b,0);
    let arrAvg = (arrSum / arr.length);
  
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      newArr.push(Number((arrAvg - arr[i]).toFixed(2)));
    }
   return newArr;
  }