var buyChoco = function(prices, money) {
    let sortedPrices = prices.sort((a,b)=> a-b,0);
    if (sortedPrices[0] + sortedPrices[1] <= money){
        return money - (sortedPrices[0] + sortedPrices[1]);
    }else{
        return money;
    }
};