function groupByCommas(n) {
    if (n < 1000){
      return String(n);
    }
   let strArr = String(n).split('');
   let count = 0;
   let  newArr = [];
   while (strArr.length > 0){
     let first = strArr.pop();
     newArr.unshift(first);
     count++
     if (count % 3 == 0 ){
       newArr.unshift(',')
     } 
   }
   if (newArr[0] == ','){
     newArr = newArr.slice(1,);
   }
  return String(newArr.join(''));
 }