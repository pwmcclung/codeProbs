const bearFur = (bears) => {
    if (bears[0] == 'black' && bears[1] == 'black'){
      return 'black'; 
    }else if (bears[0] == 'brown' && bears[1] == 'brown'){
      return 'brown'; 
    }else if (bears[0] == 'white' && bears[1] == 'white'){
      return 'white'; 
    }else if ((bears[0] == 'black' && bears[1] == 'brown') ||
              (bears[0] == 'brown' && bears[1] == 'black')){
      return 'dark brown'; 
    }else if ((bears[0] == 'black' && bears[1] == 'white') ||
              (bears[0] == 'white' && bears[1] == 'black')){
      return 'grey';
     }else if ((bears[0] == 'brown' && bears[1] == 'white') ||
              (bears[0] == 'white' && bears[1] == 'brown')){
      return 'light brown';
    }else{
      return 'unknown';
    }
  };