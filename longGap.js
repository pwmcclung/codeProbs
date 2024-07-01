function gap(num) {
    let binNum = dec2bin(num);
   if (binNum.lastIndexOf('0') > binNum.lastIndexOf('1')){
     binNum = binNum.slice(0, binNum.lastIndexOf('1'));
   }
   let onlyZeroes = binNum.split('1');
   let newArr = [];
   for (let x of onlyZeroes){
     newArr.push(x.length);
   }
   let sortedNewArr = newArr.sort((a,b)=> b-a);
   return sortedNewArr[0];
 }
 function dec2bin(dec){
     return (dec >>> 0).toString(2);
 }