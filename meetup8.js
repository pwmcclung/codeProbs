function allContinents(list) {
    let newArr = [];
    for (let x of list){
      newArr.push(x.continent);
    }
    if (newArr.includes('Africa') && newArr.includes('Asia') && newArr.includes('Americas') 
        && newArr.includes('Europe') && newArr.includes('Oceania') ){
      return true;
    }
    return false;
  }