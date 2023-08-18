function numberOfHooks(length, maxHookDist) {
    if (length <= maxHookDist){
      return 2;
    }
    let n = 2;
    while (length / n > maxHookDist){
      n *= 2;
    }
    return n + 1;
  }