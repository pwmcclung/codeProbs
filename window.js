function sliding(nums, k) {
    let arr = [];
   while ( nums.length){
     let window = nums.slice(0,k);
     nums.shift();
     if (window.length == k){
       arr.push(Math.max(...window));
     }
   }
   return arr;
 }