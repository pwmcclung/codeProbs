var numJewelsInStones = function(jewels, stones) {
    //44 ms solution
    let stonesArr = stones.split('');
    let jewelsArr = jewels.split('');
    let count = stonesArr.filter((x) => jewelsArr.includes(x));
    return count.length;
};