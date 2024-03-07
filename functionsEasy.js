function multi(arr) {
    return  arr.flat().reduce((a,b) => a * b, 1);
  }
  function add(arr) {
   return  arr.flat().reduce((a,b) => a + b, 0);
  }
  function reverse(str) {
    return str.split('').reverse().join('');
  }