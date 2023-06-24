function sortEmotions(arr, order){
  if (arr.length ===0){
    return arr;
  }
  let arrPoints = {':D':5, ':)':4, ':|':3, ':(':2, 'T_T':1};
  let newArrPoints = {5:':D', 4:':)', 3:':|', 2:':(', 1:'T_T'};
  let newArr = arr.map(x=>arrPoints[x]);
  if(order === true){
    newArr.sort(function(a,b) {return b - a} );
    return newArr.map( x => newArrPoints[x]);
  }
   if(order === false){
    newArr.sort(function(a,b) {return a - b} );
    return newArr.map( x => newArrPoints[x]);
  }
}