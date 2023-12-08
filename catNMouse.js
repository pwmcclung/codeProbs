function catMouse(x, j){
 
    let cat = x.indexOf('C');
  
    let mouse = x.indexOf('m');
  
    let dog = x.indexOf('D');
    
    let dist = Math.abs(cat - mouse);
    if (cat == -1 || mouse == -1 || dog == -1){
      return 'boring without all three';
    }
    if (dist > j){
      return 'Escaped!'
    }else if (dist <= j){
      if ( (dog > cat && dog > mouse) || (dog < cat && dog < mouse) ) {
         return 'Caught!';
      }else if ( (dog > cat && dog < mouse) ||  (dog < cat && dog > mouse) ){
         return 'Protected!'
      }
    } 
    }