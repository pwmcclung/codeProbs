function chineseZodiac(year){
    let amtYears = year - 1924;
    let aniDict = {0:'Rat', 1:'Ox', 2:'Tiger', 3:'Rabbit', 4:'Dragon', 5:'Snake', 6:'Horse', 7:'Goat', 8:'Monkey', 9:'Rooster', 10:'Dog', 11:'Pig'};
    let eleDict = {0:'Wood', 1:'Fire', 2:'Earth', 3:'Metal', 4:'Water'};
    let aniCount = 0;
    let eleCount = 0;
    let start = 0;
    while (start != amtYears){
      aniCount++;
      if (aniCount % 2 == 0){
        eleCount++;
        if (eleCount == 5){
          eleCount = 0;
        }
      }
      if (aniCount== 12){
        aniCount = 0;
      }
      start++;
    }
    return `${eleDict[eleCount]} ${aniDict[aniCount]}`;
  }
  