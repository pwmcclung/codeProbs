function divisibleByLast(n) {
    let arr1 = n.toString().split('');
    let arr2 = [false];
    for (let i = 1; i < arr1.length; i++){
      arr2.push(arr1[i] % arr1[i-1] == 0);
    }
    return arr2;
  }