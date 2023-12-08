function determineTime (durations) {
    let seconds = 86400;
     let sum= 0;
     for ( let i = 0; i < durations.length; i++){
       sum += secsMaker(durations[i]);
     }
     if (sum <= seconds){
       return true;
     }
     return false;
   }
   
   function secsMaker(num){
     let arr = num.split(':');
     let hours = Number(arr[0]);
     let mins = Number(arr[1]);
     let seconds = Number(arr[2]);
     let secondsTtl = (hours * 60 * 60) + (mins * 60) + seconds;
     return secondsTtl;
   }