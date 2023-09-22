function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    if (startPriceOld >= startPriceNew){
      return [0, startPriceOld - startPriceNew];
    };
    
    let months = 0;
    let cashAvailable = startPriceOld;
    
    for (let i = 1; cashAvailable <= startPriceNew; i++){
      if (i % 2 == 0){
        percentLossByMonth += 0.5;
      }
      months++;
      startPriceOld = startPriceOld - (startPriceOld * (percentLossByMonth / 100));
      startPriceNew = startPriceNew - ((startPriceNew * percentLossByMonth) / 100);
      cashAvailable = startPriceOld + (savingperMonth * months);
    };
    return [months, Math.round(cashAvailable - startPriceNew)];
  }


  