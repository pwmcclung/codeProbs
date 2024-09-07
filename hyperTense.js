let hypertensive = function(patients) {
    let newArr1 = [];
    for (let x of patients){
     newArr1.push(hyperCheck(x));
    }
  let count = 0;
   return newArr1.reduce((a,b) => a + b,0);
  }
  function hyperCheck(arr){
    let sysArr = [];
       let diaArr = [];
     for (let x of arr){
       let first = x.split('/')[0];
       let second = x.split('/')[1];
       
       if (first >= 180 && second >= 110){
         return 1;
         break;
       }else if(arr.length == 1){
         return 0;
       }else if (arr.length >= 2) {
         sysArr.push(parseInt(first));
         diaArr.push(parseInt(second));
       }
     }
    let sysAvg = (sysArr.reduce((a,b) => a+ b,0)) / sysArr.length;
    let diaAvg = (diaArr.reduce((a,b) => a+ b,0)) / diaArr.length;
    if (sysAvg >= 140 || diaAvg >= 90){
      return 1;
    }
    return 0;
    }
    