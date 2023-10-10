function addedChar(s1, s2){
    let s1Arr = s1.split('').sort();
    let s2Arr = s2.split('').sort();
    let s1Count = {};
    s1Arr.forEach(e => s1Count[e] ? s1Count[e]++ : s1Count[e] = 1);
    let s2Count = {};
    s2Arr.forEach(d=> s2Count[d] ? s2Count[d]++ : s2Count[d] = 1);
    for (let x in s2Count){
      if (s2Count[x] > s1Count[x] || s1Count[x] == undefined){
        return x;
      }
    }
  }