function consecutiveOnes(nums) {
    let biggest = 0;
    let count = 0;
    for (let i = 0; i< nums.length;i++){
      if (nums[i] == 1){
        count++;
      }else{
        biggest = Math.max(biggest, count);
        count = 0;
      }
    }
    return Math.max(biggest,count);
}