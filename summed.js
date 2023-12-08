function perimeter(n) {
    if (n == 0){
      return 4;
    }else{
      return 4 * (fibo(n));
    }
}
function fibo(n){
  let n1 = 0; 
  let n2 = 1;
  let nextTerm;
   let numArr = [];
   for (let i = 0; i <=n+1; i++){
     numArr.push(n1)
     nextTerm = n1 + n2; 
     n1 = n2;
     n2 = nextTerm;
   }
 
  let summed =  numArr.reduce((a,b) => a + b,0);
  return summed;
}