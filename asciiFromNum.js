function convert(number){
    let arr = strChop(number,2);
     let newStr = '';
     for (let i = 0; i< arr.length; i++){
       newStr += String.fromCharCode(arr[i]);
     }
     return newStr;
   }
   
   function strChop(str,size){
     if (str == null ) return [];
     str = String(str);
     size = ~~size;
     return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str]; 
   }