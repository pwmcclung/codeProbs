function strCount(obj){
    let countStr = 0;
     for (key in obj){
       if (typeof obj[key] == 'string'){
         countStr +=1;
       }
       if (typeof obj[key] == 'object'){
         countStr += strCount(obj[key]);
       }
     }
     return countStr;
   }