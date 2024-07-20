const checkVin = (vin) => {
    let len = vin.length;
    let vinArr = vin.split('');
    if (len != 17 ){
      return false;
    }
    let nums = {'A':1, 'B':2, 'C':3,'D':4, 'E':5, 'F':6, 'G':7, 'H':8, 
               'J':1, 'K':2, 'L':3, 'M':4, 'N':5, 'P':7, 'R':9, 'S':2, 'T':3, 'U':4, 'V':5, 'W':6, 
               'X':7, 'Y':8, 'Z':9};
    let newNums = vinArr.map((x)=>nums[x] || x);
    let weights =  [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
    let sum = 0
    for (let i = 0; i < newNums.length; i++){
      sum += newNums[i] * weights[i];
    }
    let mod11 = sum % 11;
    let ninthSpot = vinArr[8];
    if ((String(mod11) == vinArr[8])||(mod11 == 10 && ninthSpot =='X')){
      return true;
    }
    return false;
  };