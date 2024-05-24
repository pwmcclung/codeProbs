function michaelPays(costs) {
    if (costs < 5){
      return Number(costs.toFixed(2));
    };
    let kateShare = costs / 3;
    if (kateShare > 10){
      kateShare = 10;
    }
    return Number((costs - kateShare).toFixed(2));
  }