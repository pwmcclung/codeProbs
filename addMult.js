function arrayConversion(arr) {
    let numPasses = 0;
      let len = arr.length / 2;
      while (numPasses <= len){
        if (arr.length == 1){
           return Number(arr[0])
        }else{
          if (numPasses % 2 == 0 ){
          arr = adder(arr);
        }else if (numPasses % 2 != 0 ){
          arr = multy(arr);
        }
        }
        numPasses += 1;
      }
    }
    function adder(arr){
      let newArr = [];
      while(arr.length != 0){
        let first = arr.shift();
        let second = arr.shift();
        newArr.push(Number(first) + Number(second));
      }
      return newArr;
    }
    function multy(arr){
      let newArr = [];
      while (arr.length != 0){
        let first = arr.shift();
      let second = arr.shift();
        newArr.push(Number(first) * Number(second));
      }
      return newArr;
    }