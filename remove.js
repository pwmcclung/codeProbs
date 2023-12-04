function dup(s) {
    const map = [];
      const res = [];
      s.map(el => {
         el.split('').reduce((acc, value, index, arr) => {
            if (arr[index] !== arr[index+1]) {
               map.push(arr[index]);
            }
            if (index === arr.length-1) {
               res.push(map.join(''));
               map.length = 0
            }
         }, 0);
      });
      return res;
   };