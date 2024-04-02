function iTri(s){
    if (s == 0){
      return 'Starting Line... Good Luck!';
    }else{
      let dist = 140.60;
      let left = dist - s;
      let obj;
      if (left > 138.20 ){
        obj =  {'Swim': `${(left.toFixed(2))} to go!`};
      }else if (left > 26.20){
        obj =  {'Bike': `${(left.toFixed(2))} to go!`};
      }else if (left > 10){
        obj =  {'Run': `${(left.toFixed(2))} to go!`};
      }else if (left < 10 && left >0){
       obj = {"Run":"Nearly there!"};
      }else if (left <= 0){
       obj = "You're done! Stop running!";
      }
      return obj;
    }  
    }