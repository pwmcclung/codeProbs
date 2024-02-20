function countArara(n) {
    let odd = 'anane';
    let even = 'adak';
    let countArr = [];
    if (n > 0){
      for (let i = 1; i <=n; i++){
        if (i % 2 == 0){
          countArr.push(even);
        }
        if (i % 2 != 0 && i == n){
          countArr.push(odd);
        }
      }
    }
  return countArr.join(' ');
}