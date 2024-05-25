function pattern(n){
    if (n < 1){return ''};
    if (n == 1){return '1'};
    let count = 1;
   let arr = [];
     while (count < n){
       arr.push(stringMaker(n, count));
       arr.push('\n')
       count++;
     }
    arr.push(String(n));
     return arr.join('');
    
   }
   function stringMaker(num, count){
     let arr = [];
     while(count<=num){
       let countStr = String(count);
       arr.unshift(countStr);
       
       count++;
     }
     return arr.join('');
   }