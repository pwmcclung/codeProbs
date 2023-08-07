function colorProbability(color, texture){

    let smoothRed = (1/3).toString();
    smoothRed = smoothRed.slice(0, (smoothRed.indexOf("."))+3);
    let smoothYellow = (1/3).toString();
    smoothYellow = smoothYellow.slice(0, (smoothYellow.indexOf("."))+3);
    let smoothGreen = (1/3).toString();
    smoothGreen = smoothGreen.slice(0, (smoothGreen.indexOf("."))+3);
    let bumpyRed = (4/7).toString();
    bumpyRed = bumpyRed.slice(0, (bumpyRed.indexOf("."))+3);
    let bumpyYellow = (2/7).toString();
    bumpyYellow = bumpyYellow.slice(0, (bumpyYellow.indexOf("."))+3);
    let bumpyGreen = (1/7).toString();
    bumpyGreen = bumpyGreen.slice(0, (bumpyGreen.indexOf("."))+3);
    
    if (texture === 'smooth'){
      if (color === 'red'){
        return smoothRed;
      }else if (color === 'yellow'){
        return smoothYellow;
      }else if (color === 'green'){
        return smoothGreen;
      }
    }
    if (texture === 'bumpy'){
      if (color === 'red'){
        return bumpyRed;
      }else if (color === 'yellow'){
        return bumpyYellow;
      }else if (color === 'green'){
        return bumpyGreen;
      }
    }
    
  }