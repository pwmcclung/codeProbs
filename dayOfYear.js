function toDayOfYear(arr) {
 if (isLeap(arr[2])){
    let end = arr[1]-1;
   let leapDaysArr = [31,29, 31,30, 31, 30, 31, 31, 30, 31, 30, 31]
   let arrSum = leapDaysArr.slice(0, arr[1] - 1).reduce((a,b)=>a+b, 0);
   let summed = arrSum + arr[0];
   return summed;
 }else{
   let end = arr[1]-1;
   let leapDaysArr = [31,28, 31,30, 31, 30, 31, 31, 30, 31, 30, 31]
   let arrSum = leapDaysArr.slice(0, end).reduce((a,b)=>a+b, 0);
   let summed = arrSum + arr[0];
   return summed;
 }
 
}

function isLeap(y){
  if (y % 4 === 0 && y % 100 === 0 && y % 400 === 0){
    return true;
  }else if (y % 4 === 0 && y % 100 !== 0){
    return true;
  }else {
    return false;
  }
  
}