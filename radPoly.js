function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    let a = ((numberOfSides * (circleRadius ** 2))/2)* Math.sin(2 * Math.PI / numberOfSides);
    return Number(a.toFixed(3));
  }