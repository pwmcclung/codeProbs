function onlyDuplicates(str) {
    let arr = str.split('');
    let newArr = arr.filter((x) => arr.indexOf(x) != arr.lastIndexOf(x));
    return newArr.join('');
  }