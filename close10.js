const closestMultiple10 = num => {
    let smallerMult = parseInt(num / 10, 10) * 10;
    let largerMult = smallerMult + 10;
    return (num - smallerMult >= largerMult - num) ? largerMult : smallerMult;
  };