function digitsAverage(input) {
    if (input < 10){
      return input;
    }
    while (input >9){
      input = String(input);
      let newArr = [];
      for (let i = 0; i < input.length -1; i++){
        newArr.push(Math.round((Number(input[i]) + Number(input[i+1]))/2));
      }
      input = +newArr.join('');
    }
   return input;
  }