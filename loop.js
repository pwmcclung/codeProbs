function loopArr(arr, direction, steps) {
    let count = 0;
    if (direction == 'right'){
      while (count < steps){
        let first = arr.pop();
        arr.unshift(first);
        count++;
      }
    }else if (direction == 'left'){
      while (count < steps){
        let first = arr.shift();
        arr.push(first);
        count++;
      }
    }
  return arr;
}