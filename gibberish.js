function cleanItUp(arr) {
    let allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let newStr = arr.split('').filter((x) => allowed.includes(x));
    let newArr = [];
    let newArr1 = [];
    let count = 0;
    let modLeft = newStr.length % 5;
    if (modLeft > 0){
      newStr = newStr.slice(0, -modLeft);
    }
    while(newStr.length){
      let first = newStr.shift();
      count++;
      if (count <= 5 ){
        newArr.push(first);
      }
      if (count ==5){
        let partOne = String(newArr.slice(0,1)).toUpperCase();
        let partTwo = String(newArr.slice(1,newArr.length).join('')).toLowerCase();
        newArr1.push(partOne+partTwo);
        newArr = [];
        count = 0;
      }
    }
    return newArr1.join(' ');
  }