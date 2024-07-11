function get_rand(a,b){
    let minimum = Math.ceil(a);
    let maximum = Math.floor(b);
    return Math.floor(Math.random() * (maximum - minimum+1)) + minimum;
  }
  
  function getCard() {
    let bingoArr = [];
    for (let i = 0; i < 5; i++){
      let bing = `B${get_rand(1,15)}`;
      if (!bingoArr.includes(bing)){
        bingoArr.push(bing)
      }else{
        i--;
      }
    }
    for (let i = 0; i < 5; i++){
      let bing = `I${get_rand(16,30)}`;
      if (!bingoArr.includes(bing)){
        bingoArr.push(bing)
      }else{
        i--;
      }
    }
    for (let i = 0; i < 5; i++){
      let bing = `N${get_rand(31,45)}`;
      if (i===2){} 
      else if (!bingoArr.includes(bing)){
        bingoArr.push(bing)
      }else{
        i--;
      }
    }
    for (let i = 0; i < 5; i++){
      let bing = `G${get_rand(46,60)}`;
      if (!bingoArr.includes(bing)){
        bingoArr.push(bing)
      }else{
        i--;
      }
    }
    for (let i = 0; i < 5; i++){
      let bing = `O${get_rand(61,75)}`;
      if (!bingoArr.includes(bing)){
        bingoArr.push(bing)
      }else{
        i--;
      }
    }
    return bingoArr;
  }