var maximumWealth = function(accounts) {
    let arr = [];
    for(let x of accounts){
        arr.push(x.reduce((a,b) => a + b, 0));
    }
    return Math.max(...arr);
};