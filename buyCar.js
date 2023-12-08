function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    // if the price of his old car is greater than the new car, return zero months and old minus new
    if (startPriceOld >= startPriceNew){
      return [0, startPriceOld - startPriceNew];
    };
    //create a variable for months and cash on hand
    let months = 0;
    let cashAvailable = startPriceOld;
    
    //create for loop that will iterate until cashAvailable is equal to the cost of the new car
    for (let i = 1; cashAvailable <= startPriceNew; i++){
      // during each iteration, the loop will check and do several things.
      //first it will check to see if the month is a second month, if so, the loss increases by 0.5
      if (i % 2 == 0){
        percentLossByMonth += 0.5;
      }
      //each iteration will add one month
      months++;
      //each iteration will calculate the decrease in value for the new and old cars
      startPriceOld = startPriceOld - (startPriceOld * (percentLossByMonth / 100));
      startPriceNew = startPriceNew - ((startPriceNew * percentLossByMonth) / 100);
      //and recalulate the cash available. one cash available is at least equal to or greater than
      // the cost of the new car the loop terminates
      cashAvailable = startPriceOld + (savingperMonth * months);
    };
    //once the loop is finishes, months and cash minus start price of new car is returned.
    return [months, Math.round(cashAvailable - startPriceNew)];
  }


