function solution(number){
    let nummyMinusOne = number - 1;
    let n5 = Math.floor((nummyMinusOne) / 5);
    let n3 = Math.floor((nummyMinusOne) / 3);
    let n15 = Math.floor((nummyMinusOne) / 15);
    
    let sumFive = ((n5 * (n5 + 1)) / 2 ) * 5;
    let sumThree = ((n3 * (n3 + 1)) / 2) * 3;
    let sumFifteen = ((n15 * (n15 + 1)) / 2 ) * 15;
      
    return sumFive + sumThree - sumFifteen;
  }