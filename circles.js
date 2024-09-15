function sumCircles(...arr) {
    let sum = 0;
  for (let i = 0; i< arr.length;i++){
    sum += circle(arr[i]);
  }
  return `We have this much circle: ${Math.round(sum)}`;
}
function circle(dia){
  let a = (Math.PI * dia**2)/ 4;
  return a;
}