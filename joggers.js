var nbrOfLaps = function (x, y) {
    let min = (x > y) ? x : y;
    let val = 0
    while (true){
      if (min % x == 0 && min % y == 0){
        val = min;
        break;
      }
      min++
    }
      let bob = val / x;
      let charles = val / y;
      let array = [bob, charles];
      return array;
    }