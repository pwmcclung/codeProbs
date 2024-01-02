function duplicateSandwich(a) {
    const duplicates = Array.from(a).filter((item, index) =>a.indexOf(item) !== index);
    let firstSpot = a.indexOf(duplicates[0]);
    let secondSpot = a.lastIndexOf(duplicates[0]);
    return a.slice(firstSpot+1, secondSpot);
  }