function solve(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    if (a[0] > b[0]){
      alicePoints++;
    }else if (b[0] > a[0]){
      bobPoints++;
    }
      if (a[1] > b[1]){
      alicePoints++;
    }else if (b[1] > a[1]){
      bobPoints++;
    }
      if (a[2] > b[2]){
      alicePoints++;
    }else if (b[2] > a[2]){
      bobPoints++;
    }
    if (alicePoints == bobPoints){
      return `${alicePoints}, ${bobPoints}: that looks like a "draw"! Rock on!`;
    }else if (alicePoints > bobPoints){
      return `${alicePoints}, ${bobPoints}: Alice made "Kurt" proud!`;
    }else if (bobPoints > alicePoints){
      return `${alicePoints}, ${bobPoints}: Bob made "Jeff" proud!`;
    }
    }