obfuscate = function(email) {
    let dict= {'.':' [dot] ', '@':' [at] '}
    let arr = email.split('');
    let newArr = arr.map((x)=>dict[x] || x);
    return newArr.join('');
  }