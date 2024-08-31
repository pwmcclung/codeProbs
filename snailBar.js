function canSnailReachEnd(length, speed, lengthIncreases) {
    if (lengthIncreases >= speed){
      return false;
    }
  //525600 minutes in a year
  let getThere = length / (speed - lengthIncreases);
  if (getThere <= 525600){
    return true;
  }
  return false;
}