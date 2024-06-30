function countFeelings(string, array) {
    let newString = string.split('');
    let newStrDict = {};
    newString.forEach( e => newStrDict[e] ? newStrDict[e]++ : newStrDict[e] = 1);
   let ans = 0;
   array.map( v => v.split``.reduce((a,b )=> ( a[b] = a[b]+1 || 1, a),{})).map(v=>{
      for (let i in v){
        if ( newStrDict[i] == undefined) return;
        if ( newStrDict[i] < v[i] ) return;
      }
      ans++;
    })
    if (ans > 1 || ans == 0){
      return `${ans} feelings.`;
    }else if (ans == 1){
       return `${ans} feeling.`;
    }
  }