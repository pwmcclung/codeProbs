function getWinner(listOfBallots) {
    let len = listOfBallots.length / 2;
    let freq = {};
    for (let i = 0; i<listOfBallots.length;i++){
      if (freq[listOfBallots[i]]){
        freq[listOfBallots[i]]++;
      }else{
        freq[listOfBallots[i]] = 1;
      }
    }
    let largest = Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);
    if (freq[largest] > len){
      return largest;
    }else{
      return null;
    }
  }