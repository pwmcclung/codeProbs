var getQuote = function(quotes, hero){
    let newHero = '';
    if (hero.includes('B')){
      newHero = 'Batman';
    }else if (hero.includes('R')){
      newHero = 'Robin';
    }else{
      newHero = 'Joker';
    }
    let num = hero.replace( /\D/g, '');
    return `${newHero}: ${quotes[num]}`
  }
  