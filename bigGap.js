function maxGap (numbers){
    let sortNums = numbers.sort((a,b)=> a-b,0);
    let biggestGap = [];
    for (let i = 0; i < sortNums.length-1; i++){
      biggestGap.push(Math.abs(sortNums[i] - sortNums[i+1]));
    }
    return Math.max(...biggestGap);
  }