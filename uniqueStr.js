function findUniq(arr) {
    let flatArr = arr.join('').toLowerCase();
    let newArr = flatArr.split('');
    let lets = {};
    for (let i = 0; i< newArr.length;i++){
      if (lets[newArr[i]]){
        lets[newArr[i]]++;
      }else{
        lets[newArr[i]] = 1;
      }
    }
    let newArr2 = Object.entries(lets).sort((a,b) => a[1] - b[1]);
    let one = String(newArr2[0][0])
    let found = arr.filter((x)=>x.toLowerCase().includes(one));
    return String(found);
  
  }