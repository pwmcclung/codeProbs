function halvingSum(n) {
   let newArr = [n, ];
  let y = 2;
   while( Math.floor(n / y) !== 0){
     newArr.push(Math.floor(n / y));
     y = y * 2;
   }
  let sum = newArr.reduce((a,b) => a + b, 0);
  return sum;
}