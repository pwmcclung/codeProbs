function SeriesSum(n)
{
  let summed = 0;
  for ( let i = 0; i < n; i++){
    summed += 1 / ( 1 + i * 3);
  }
  return summed.toFixed(2);
}