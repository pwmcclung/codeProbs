function frog_contest(n) {
    let chris = summation(n);
    let tom = summation(Math.floor(chris/2));
    let cat = summation(Math.floor(chris + tom));
    return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`;
  }
  
  function summation(n){
    return (n/2) * (n + 1);
  }