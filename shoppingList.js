function shoppingListCost(arr) {
    if (arr.length == 0){return 0};
    let totalCost = 0;
    for(let i = 0; i < arr.length;i++){
      let item = arr[i][0];
      let quantity = arr[i][1];
      let itemCost = groceries[item].price;
      if (groceries[item].discount > 0){
        itemCost = itemCost - (itemCost * (groceries[item].discount / 100));
      }
      if (groceries[item].bogof == true && quantity % 2 != 0){
        quantity = (Math.floor(quantity/2)) + 1;
      }else if (groceries[item].bogof == true && quantity % 2 == 0){
        quantity = (Math.floor(quantity/2));
      }
      totalCost += itemCost * quantity;
    }
    return Number(totalCost.toFixed(2));
  }