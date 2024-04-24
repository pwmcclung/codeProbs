function actuallyReallyGood(foods){

    if (foods.length == 0){
      return 'You know what\'s actually really good? Nothing!';
    }else if (foods.length == 1){
      let firstPart = foods[0].slice(0,1).toUpperCase();
      let secondPart = foods[0].slice(1,).toLowerCase();
      let firstWord = firstPart + secondPart;
      let secondWord = foods[0].toLowerCase();
      return `You know what\'s actually really good? ${firstWord} and more ${secondWord}.`;
    }else if(foods.length == 2){
      let firstPart = foods[0].slice(0,1).toUpperCase();
      let secondPart = foods[0].slice(1,).toLowerCase();
      let firstWord = firstPart + secondPart;
      let secondWord = foods[1].toLowerCase();
      return `You know what\'s actually really good? ${firstWord} and more ${secondWord}.`;
    } else{
      let newArr = [...new Set(foods)];
      let firstPart = newArr[0].slice(0,1).toUpperCase();
      let secondPart = newArr[0].slice(1,).toLowerCase();
      let firstWord = firstPart + secondPart;
      let secondWord = newArr[1].toLowerCase();
      return `You know what\'s actually really good? ${firstWord} and more ${secondWord}.`;
    }
  }