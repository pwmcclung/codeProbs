function solution(number){
    let romanEncoded = ''
    let vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanVals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    vals.map(function(val, idx) {
      while (number >= val){
        romanEncoded = romanEncoded + romanVals[idx];
        number = number - val;
      }
    });
    return romanEncoded;
  }