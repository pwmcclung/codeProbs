function bearDollars(arr) {
    let closeFriendDollars = 0;
    let acquaintanceDollars = 0;
    let friendDollars = 0;
    let regDollas = 0;
    for (let x of arr){
      let choice = x[1].toLowerCase();
      if (choice == "close friend"){
        closeFriendDollars += x[0] * 25;
      }else if  (choice == "acquaintance"){
        acquaintanceDollars += x[0] * 100;  
    }else if (choice == "friend"){
        friendDollars += x[0] * 50;  
    }else{
      regDollas += x[0] * 125;
    }
  }
    let moniesEarned = closeFriendDollars + acquaintanceDollars + friendDollars + regDollas;
    return moniesEarned;
    }