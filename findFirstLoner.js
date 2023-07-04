function noRepeat(str) {  
  let newArr = str.split('');
  newArr = newArr.filter(x => newArr.indexOf(x) === newArr.lastIndexOf(x));
  return newArr[0];
}