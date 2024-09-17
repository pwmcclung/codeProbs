function isLucky(ticket) {
    if (ticket.length != 6){
      return false;
    }
   let isNums = /^\d+$/.test(ticket)
   if (isNums != true){
     return false;
   }else{
     let arr = ticket.split('');
     let left = arr.slice(0,3).reduce((a,b) => Number(a) + Number(b), 0);
     let right = arr.slice(3,).reduce((a,b) => Number(a) + Number(b), 0);;
     if (left == right){
       return true;
     }
     return false;
   }
 }