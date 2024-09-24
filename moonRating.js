function moonRating(rating) {
    let fulls = '';
    let halfs = '';
    let news = '';
    if (rating == 0 ){
      return 'xxxxx';
    }
    let halves = rating/2;
    halves = Number((Math.round(halves * 2) / 2).toFixed(1));
    if (Number.isInteger(halves)){
      fulls = 'o'.repeat(halves);
      news = 'x'.repeat(5-halves);
      return fulls+news;
    }else if (!Number.isInteger(halves)){
      if (halves >=1){
      fulls = 'o'.repeat(halves);
      halfs = 'c';
      news = 'x'.repeat(5-Math.ceil(fulls.length+halfs.length));
      return fulls+halfs+news;
      }else{
      fulls = 'o'.repeat(halves);
      halfs = 'c';
      news = 'x'.repeat(5-Math.ceil(halfs.length));
      return halfs+news;
      }    
    }
  }