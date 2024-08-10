function letterCheck(arr) {
    let one = arr[0].toLowerCase().split('');
    let two = arr[1].toLowerCase().split('');
    return two.every(x=>one.includes(x));
  }