function isAgeDiverse(list) {
    let teens = [];
    let twenties = [];
    let thirties = [];
    let forties = [];
    let fifties = [];
    let sixties = [];
    let seventies = [];
    let eighties = [];
    let nineties = [];
    let cents = [];
    for (let i = 0; i < list.length; i++){
      if (list[i].age > 99){
        cents.push(1)
      }else if (list[i].age > 89){
        nineties.push(1);
      }else if (list[i].age > 79){
        eighties.push(1);
      }else if (list[i].age > 69){
        seventies.push(1);
      }else if (list[i].age > 59){
        sixties.push(1);
      }else if (list[i].age > 49){
        fifties.push(1);
      }else if (list[i].age > 39){
        forties.push(1);
      }else if (list[i].age > 29){
        thirties.push(1);
      }else if (list[i].age > 19){
        twenties.push(1);
      }else{
        teens.push(1);
      }
    }
    if (teens.length > 0 && twenties.length > 0 && thirties.length > 0 && forties.length > 0 && fifties.length > 0 &&
        sixties.length > 0 && seventies.length > 0 && eighties.length > 0 && nineties.length > 0 && cents.length > 0){
      return true;
    }
    return false;
  }