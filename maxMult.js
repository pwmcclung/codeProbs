// function maxMultiple(divisor, bound){
    2
    //   let arr =[];
    3
    //   let newNum = 1;
    4
    //   while (newNum <= bound){
    5
    //     if (newNum % divisor == 0){
    6
    //        arr.push(newNum);
    7
    //     }
    8
    //     newNum++;
    9
    //   }
    10
      
    11
    //   return arr[arr.length-1];
    12
    // }
    13
    function maxMultiple(divisor, bound){
    14
      let newBound = bound;
    15
      while (newBound > 0){
    16
        if (newBound % divisor == 0){
    17
            return newBound;
    18
            break;
    19
            }
    20
        newBound--;
    21
      }
    22
    }