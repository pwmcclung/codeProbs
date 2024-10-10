function howMuchTo(score, current) {
    let myScore = requiredScore[current];
    let numProbs = 0;
    let pointsNeed = score - myScore;
  while (myScore< score){
      if (myScore < 20){
          while (myScore <20){
             numProbs++;
             myScore+=2
      }
      }else if (myScore < 76){
      while (myScore < 76){
        numProbs++;
        myScore += 3;
      }
    }else if (myScore < 229){
      while(myScore < 229){
        numProbs++;
      myScore+=8;
      }  
    }else if (myScore < 643){
      while(myScore < 643){
        numProbs++;
        myScore += 21;
      }
    }else if (myScore < 1768){
      
    while(myScore <1768){
      numProbs++;
      myScore+=55;
    }
  }else if (myScore < 4829){
    while(myScore < 4829){
      numProbs++;
      myScore += 149;
    }
  }else if (myScore < 13147){
    while (myScore < 13147){
      numProbs++;
      myScore += 404;
    }
  }else{
    while (myScore < score){
      numProbs++;
      myScore+=1097;
    }
  }
  }
    return numProbs;
    }