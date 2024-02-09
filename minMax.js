var findNonMinOrMax = function(nums) {
    let numsSorted = nums.sort((a,b) => a -b,0);
    if (numsSorted.length > 2){
        return numsSorted[1];
    }
    return -1;
};