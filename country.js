function countWins(winnerList, country) {
    let count = 0;
     for (let x of winnerList){
       if(x.country == country){
         count++;
       }
     }
    return count;
  }