function leastLarger(a,i) {
    let copy = a.slice();
    let spot = a[i];
    let newArr = copy.filter((x) => x > spot).sort((a,b)=> a-b,0);
    return a.indexOf(newArr[0]);
  }