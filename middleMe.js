function middleMe(N, X, Y){
    let firstString = Y.repeat(N);
  if (firstString.length % 2 != 0){
    return X;
  }else{
    let half = firstString.length / 2;
    let firstHalf = firstString.slice(0, half);
    let secondHalf = firstString.slice(half,);
    return firstHalf + X + secondHalf;
  }
}