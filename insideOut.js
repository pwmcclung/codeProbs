function insideOut(x){
  let arr = x.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > 3){
      newArr.push(wordChanger(arr[i]));
    }else{
      newArr.push(arr[i]);
    }
  }
  return newArr.join(' ');
}
function wordChanger(x){
  if (x.length % 2 === 0){
    let arr = x.split('');
    let len = arr.length / 2;
    let first = arr.slice(0, len);
    let second = arr.slice(len, );
    let firstRev = first.reverse().join('');
    let secondRev = second.reverse().join('');
    return firstRev + secondRev;
  }else if (x.length % 2 !== 0){
      let arr = x.split('');
      let len = Math.ceil(x.length / 2);
    let first = arr.slice(0, len -1 );
    let second = arr.slice(len, );
    let mid = arr[len -1]
    let firstRev = first.reverse().join('');
    let secondRev = second.reverse().join('');
    return firstRev + mid + secondRev;
  }
}