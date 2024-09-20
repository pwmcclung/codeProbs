var numJewelsInStones = function(jewels, stones) {
    //63 ms solution
    let count = 0;
    for (let i = 0; i < stones.length; i++){
        if (jewels.includes(stones[i])){
            count++;
        }
    }
    return count;
};