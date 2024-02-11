function flipNumber(n)
{
  let len = n.length;
  let newStr = '';
  let arr = n.split('');
  while ( len > 0){
    arr.reverse();
    let first = arr.shift();
    newStr += String(first);
    len--;
  }
  return newStr;
}