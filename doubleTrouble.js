function trouble(x, t){
    let xCopy = x.slice();
    for (let i = 0; i < xCopy.length; i++){
      if (xCopy[i] + xCopy[i+1] == t){
        xCopy.splice(i+1,1);
        i--;
      }
    }
    return xCopy;
  }