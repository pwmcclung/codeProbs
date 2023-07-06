function archersReady(archers){
    // arrow it
    if (archers.length <= 0 ){
      return false;
    }
    return archers.every(x =>  x >= 5);
  }