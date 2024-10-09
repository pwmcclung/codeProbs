function solve(compasses, gears, tablets) {
    if (compasses == 0 && gears == 0 && tablets ==0){
      return 0;
    }else{
      let compassesSqr = compasses * compasses;
     let gearsSqr = gears * gears;
     let tabletsSqr = tablets * tablets;
     let totalSets = 0;
     while(gears >0 && compasses >0 && tablets > 0){
       totalSets+=7;
       gears--;
       compasses--;
       tablets--;
     }
     return totalSets+compassesSqr+gearsSqr+tabletsSqr;  
    } 
   }