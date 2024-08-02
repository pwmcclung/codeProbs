var sumOfUnique = function(nums) {
    sum = nums.filter(function(item) {return nums.lastIndexOf(item) == nums.indexOf(item);});
    sum = sum.reduce((a,b)=> a + b,0);
    return sum;
};