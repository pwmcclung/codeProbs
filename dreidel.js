function gamble(rolls, myCoins, pot) {
    //your gambling code here
    let rollCount = 0;
    while (rollCount < rolls.length){
      if (rolls[rollCount] == 'Shin'){
        myCoins -= 1;
        pot += 1;
      }
      if (rolls[rollCount] == 'Hei'){
        let myWinnings = (pot/2);
        pot -= myWinnings;
        myCoins += myWinnings;
      }
      if (rolls[rollCount] == 'Gimel'){
        let myBigWinnings = pot;
        pot -= myBigWinnings;
        myCoins += myBigWinnings;
      }
      if (rolls[rollCount] == 'Nun'){
        pot -= 0;
        myCoins += 0;
      }
      rollCount++;
    }
    return Math.floor(myCoins);
  }



  