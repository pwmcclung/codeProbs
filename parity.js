function findOutlier(integers){
let evenNums = integers.filter(x => x % 2 === 0);
let oddNums = integers.filter(x => x % 2 !== 0);
if (evenNums.length === 1){
  return evenNums[0];
}else{
  return oddNums[0];
}
}