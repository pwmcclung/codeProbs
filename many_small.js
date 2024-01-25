var smallerNumbersThanCurrent = function(nums) {
    let len = nums.length;
      let countArr = [];
      let sum = 0;
  while (len > 0){
      let first = nums.shift();
      for (let i = 0; i < nums.length; i++){
          if (first > nums[i]){
              sum += 1;
          }
      }
      countArr.push(sum);
      let last = nums.push(first);
      sum =  0;
      len --;
  }
  return countArr;
  };