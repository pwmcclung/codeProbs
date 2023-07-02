function mirror(data) {
  let copyOfData = data.slice();
  let copySortedBigToSmall = copyOfData.sort((a,b)=> b - a);
  let copyOfCopySortedBigToSmallReversed  = copySortedBigToSmall.slice(1,).sort((a,b)=>a-b);
  if (data.length === 0){
    return [];
  }else{
    return copyOfCopySortedBigToSmallReversed.concat(copySortedBigToSmall);
  }

}