function noonerize(numbers) {
    if (typeof numbers[0] != 'number' || typeof numbers[1] != 'number'){
      return 'invalid array';
    }
    let first =  String(numbers[0]);
    let second = String(numbers[1]);
    let firstNum = first.slice(0,1);
    let secNum = first.slice(1,);
    let thirdNum = second.slice(0,1);
    let fourNum = second.slice(1,);
    let calc1 = thirdNum + secNum;
    let calc2 = firstNum + fourNum;
    return Math.abs(Number(calc1) - Number(calc2)) || 0;
    
  }