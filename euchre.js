function updateScore(currentScore, calledTrump, alone, tricks) {
    let team1Score = currentScore[0];
    let team2Score = currentScore[1];
    
    let scoreCount1 = 0;
    let scoreCount2 = 0;
    
    for (let i = 0; i < tricks.length; i++){
      if (tricks[i] == 1){
        scoreCount1++;
      }else{
        scoreCount2++;
      }
    }
    
  if (calledTrump == 1){
    if (scoreCount1 <= 2){
      team2Score += 2;
    }else if (scoreCount1 < 5 && scoreCount1 > 2){
      team1Score += 1;
    }else if (scoreCount1 == 5 && alone == true){
      team1Score += 4;
    }else if (scoreCount1 == 5 && alone == false){
      team1Score += 2;
    }
    }
  if (calledTrump == 2){
    if (scoreCount2 <= 2){
      team1Score += 2;
    }else if (scoreCount2 < 5 && scoreCount2 > 2){
      team2Score += 1;
    }else if (scoreCount2 == 5 && alone == true){
      team2Score += 4;
    }else if (scoreCount2 == 5 && alone == false){
      team2Score += 2;
    }
    }
  return [team1Score, team2Score];
  }