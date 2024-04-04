function calorie (member){
    let rmr;
  if (member[1] == 'f'){
    rmr = (10 * member[4]) + (6.25 * member[3]) - ( 5 * member[2]) - 161;
  }else{
    rmr = (10 * member[4]) + (6.25 * member[3]) - (5 * member[2]) + 5;
  }
    let ans = '';
    if (member[5] == 'little activity'){
      ans = `${member[0]}´s daily calorie requirement is ${(rmr * 1.2).toFixed(2)} kcal.`;
    }else if (member[5] == 'moderately active'){
     ans =  `${member[0]}´s daily calorie requirement is ${(rmr * 1.55).toFixed(2)} kcal.`;
    }else if (member[5] == 'very active'){
     ans = `${member[0]}´s daily calorie requirement is ${(rmr * 1.7).toFixed(2)} kcal.`;
    }else if (member[5] == 'extremely active'){
      ans = `${member[0]}´s daily calorie requirement is ${Math.round(((rmr * 1.9) + Number.EPSILON) * 100) / 100} kcal.`;
    }
  return ans;
  }