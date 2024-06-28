function equableTriangle(a,b,c) {
    let p = a + b + c;
    let s = p / 2;
    let area = Math.sqrt(s * ( s - a )  * ( s - b) * ( s - c ));
    if (area == p){
      return true;
    }
    return false;
  }