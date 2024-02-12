var maximizeSum = function(nums, k) {
    let count = 0;
    let maximum = Math.max(...nums);
    let sum = 0;
    while (count < k){
       sum += maximum;
       maximum += 1;
       count++;
    }
    return sum;
};