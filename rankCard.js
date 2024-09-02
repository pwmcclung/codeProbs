function rank(card) {
    if (card.includes('A')){
      return 14;
    }else if (card.includes('K')){
      return 13;
    }else if (card.includes('Q')){
      return 12;
    }else if (card.includes('J')){
      return 11;
    }else if (card.includes('T')){
      return 10;
    }else{
      let score = parseInt(card);
      if (score < 10 && score > 1){
        return score;
      }else{
        return 0;
      }
    }
  }