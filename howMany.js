var howManyYears = function(date1, date2){
    let first = date1.indexOf('/');
     let second = date2.indexOf('/');
     let max = Math.max(Number(date2.slice(0,second)),  Number(date1.slice(0,first)));
     let min = Math.min(Number(date2.slice(0,second)),  Number(date1.slice(0,first)));
     return max - min;
   }