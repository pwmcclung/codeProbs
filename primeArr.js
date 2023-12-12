function primes(start, end){
    let newArr = [];
 for (let i = start; i <=end; i++){
   if ( isPrime(i)== true){
     newArr.push(i);
   }
 }
 if (newArr.length == 0){
   return null;
 }else{
   return newArr;
 }
 }
function isPrime(num){
 for (let i = 2; i < num; i++){
   if (num % i === 0 ){return false};
 }
 return num > 1;
}