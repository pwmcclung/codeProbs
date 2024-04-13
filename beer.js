function gameOfFives(bavarianBeerBears,scandinavianSchöllers){
    let num1 = bavarianBeerBears.filter((x)=>x== 5).length;
    let num2 = scandinavianSchöllers.filter((x)=>x== 5).length;
    if (num1 == num2){
      return "Drinks All Round! Free Beers on Bjorg!";
    }
   return "Uh Oh! Bjorg's a donut! No beer for anyone!";
 }