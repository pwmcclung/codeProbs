function didWeWin(plays){
    let dist = 0; 
    let arr = plays.flat();
    if(arr.includes('turnover')){return false;}
    else{
      for (let i = 0; i< plays.length; i++){
      if (plays[i][1] == "pass"){
        dist += plays[i][0];
      }
       if (plays[i][1] == "run"){
        dist += plays[i][0];
      }
       if (plays[i][1] == "sack"){
        dist -= plays[i][0];
      }
    }
   if (dist <= 10){
     return false;
   }
    return true;
      
    } 
  }