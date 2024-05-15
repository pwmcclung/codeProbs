function matchArrays(v,r){
    let ans = v.filter( x => r.includes(x));
    return ans.length;
  }