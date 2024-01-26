function whatListAmIOn(actions){
    let naughtyCount = 0;
    let niceCount = 0;
   for (let i = 0; i < actions.length; i++){
     if (actions[i][0] == 'b' || actions[i][0] == 'f'||actions[i][0] == 'k'){
       naughtyCount++;
     }else if (actions[i][0] == 'g'||actions[i][0] == 's'||actions[i][0] == 'n'){
       niceCount++;
     }
   }
    if (naughtyCount >= niceCount){
      return 'naughty';
    }
    return 'nice';
  }