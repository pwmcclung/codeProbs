var numberGame = function(nums) {
    let arr = [];
    let sortNums = nums.sort((a,b) => a-b,0);
    while (sortNums.length > 0){
        alice = sortNums.shift();
        bob = sortNums.shift();
        arr.push(bob, alice);
    }
    return arr;
};