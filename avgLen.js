function averageLength(arr) { 
    let len = arr.length;
    let sum = arr.map(function(word){return word.length}).reduce((a,b) => a + b,0);
    let avg = Math.round(sum/len);
    let newArr = [];
    for (let i = 0; i< arr.length; i++){
      if (arr[i].length == avg){
        newArr.push(arr[i]);
      }else if (arr[i].length < avg){
        newArr.push(arr[i].padEnd(avg, arr[i]));
      }else{
        newArr.push(arr[i].slice(0,avg));
      }
    }
    return newArr;
  }