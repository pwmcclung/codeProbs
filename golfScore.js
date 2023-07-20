function golfScoreCalculator(parList, scoreList){
    let score = [];
    let parArr = parList.split('');
    let scoreArr = scoreList.split('');
    for (let i = 0; i < parArr.length; i++){
      score.push( Number(scoreArr[i]) - Number(parArr[i]) );
    }
      return score.reduce((a,b) => a + b);
    }