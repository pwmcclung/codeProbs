function getNewNotes(salary,bills){
    let billsSum = bills.reduce( ( a , b ) => a + b,0);
    let moneyLeftOver = salary - billsSum;
    if ( moneyLeftOver > 0 ){
      return Math.floor( moneyLeftOver / 5);
    }else{
      return 0;
    }
  }