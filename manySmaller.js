function smaller(nums) {
    let arr = [];
    let count = 0;
    while (nums.length > 0){
      let first = nums.shift();
      for (let i = 0; i < nums.length; i++){
        if (first > nums[i]){
          count++;
        }
      }
      arr.push(count);
      count = 0;
    }
    return arr;
    }