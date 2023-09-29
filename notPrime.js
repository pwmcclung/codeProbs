let arrOfPrimes = ['2', '3', '5', '7'];
let returnArr = [];
function notPrimePrime(){
  for (let i = 0; i < 20000; i++){
    if (i.toString().split``.every(x=>arrOfPrimes.includes(x) && !primeCalc(i))){
      returnArr.push(i);
    } 
  }
}
notPrimePrime()
function notPrimes(a,b){
  if (a > returnArr[returnArr.length-1]){
    return [];
  } 
  
  let min = returnArr.findIndex((ele,i) => ele >= a);
  if ( b > returnArr[returnArr.length-1]){
    return returnArr.slice(min);
  } 
  let max = returnArr.findIndex((ele2,idx ) => b <= ele2)
  return returnArr.slice(min,max);
}

function primeCalc(num){
  for (let i =2; i < num; i++){
    if (num % i == 0){
      return false;
    }
  }
  return num > 1;
}