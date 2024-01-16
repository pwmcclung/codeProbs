function gps(s, x) {
    let arr = [];
  if (x.length <=1){
    return 0;
  }
  for(let i = 0; i < x.length -1; i++){
   arr.push((x[i+1] - x[i]) * 3600 / s)
  }
 let biggest = Math.max(...arr)
 return biggest;
}
