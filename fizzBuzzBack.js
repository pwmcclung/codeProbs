function reverseFizzBuzz(array) {

    let fizz = array.indexOf('Fizz') + 1;
    let buzz = array.indexOf('Buzz') + 1;
    let fizzBuzz = array.indexOf('FizzBuzz') + 1;
    
    if (fizz == 0 && buzz > 0 && fizzBuzz > 0){
      return [fizzBuzz, buzz];
    }
    if (fizz > 0 && buzz > 0){
      return [fizz, buzz];
    }
    if (fizz == 0 && buzz == 0 && fizzBuzz >0){
      return [fizzBuzz, fizzBuzz];
    }
    if (fizz > 0 && buzz == 0 && fizzBuzz >0){
      return [fizz, fizzBuzz];
    }
  };