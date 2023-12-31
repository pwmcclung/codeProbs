function mpg2lp100km(x){
    let km2Miles = 100 / 1.609344;
    let ttlMiles = km2Miles /x ;
    let ttlLiters = 3.785411784 * ttlMiles;
    return Number(ttlLiters.toFixed(2));
    
  }
  
  function lp100km2mpg(x){
    let km2Miles = 100 / 1.609344;
    let l2Gals = x / 3.785411784;
    return Number((km2Miles / l2Gals).toFixed(2));
  }