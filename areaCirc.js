var circleArea = function(radius) {
    if (radius < 1 || typeof radius != 'number'){
      return false;
    }
    let circ = Math.PI * (radius**2);
    return Number(circ.toFixed(2));
  };