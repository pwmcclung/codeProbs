var findGCD = function(nums) {
    let newNums = nums.sort(function(a,b){return a - b});
    let smallest = newNums[0];
    let largest = newNums[newNums.length -1];
    return gcd(largest, smallest);
};

function gcd(a,b){
    if (b == 0){
        return a;
    }else{
        return gcd(b, a % b)
    }
}