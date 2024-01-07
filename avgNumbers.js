function averages(numbers) {
    let arr = [];
    if (numbers){
        for (let i = 0; i < numbers.length-1; i++){
      arr.push((numbers[i] + numbers[i+ 1]) /2);
    }
    return arr;
    }else{
      return [];
    }
  
  }