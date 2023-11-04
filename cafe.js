var coffeeLimits = function(y,m,d) {
    let cafe = 51966;
     let decaf = 912559;
     let cafesAllowed = [];
     let decafsAllowed = [];
     let year = String(y);
     if (m < 10){
       m = '0' + String(m);
     }else{
       m = String(m);
     }
     if (d < 10){
       d = '0' + String(d);
     }else{
       d = String(d);
     }
     let healthNum = Number(y+m+d);
     for (let i = 0; i < 5001; i++){
       let cafeTotal = healthNum + (i * cafe);
       let deCafTotal = healthNum + ( i * decaf);
       let cafeHex = cafeTotal.toString(16);
       let decafHex = deCafTotal.toString(16);
       if (cafeHex.includes('dead')){
         cafesAllowed.push(i);
       }
       if (decafHex.includes('dead')){
         decafsAllowed.push(i);
       }
     }
   
     if(cafesAllowed.length > 1 && cafesAllowed[0] == 0){
       cafesAllowed = Number(cafesAllowed[1]);
     }else if (cafesAllowed.length > 1 && cafesAllowed[0] != 0){
       cafesAllowed = Number(cafesAllowed[0]);
     }else if (cafesAllowed.length == 0){
       cafesAllowed = Number(0);
     }
     if (decafsAllowed.length > 1 && decafsAllowed[0] == 0){
       decafsAllowed = Number(decafsAllowed[1]);
     }else if (decafsAllowed.length > 1 && decafsAllowed[0] != 0){
       decafsAllowed = Number(decafsAllowed[0]);
     }else if (decafsAllowed.length == 0){
       decafsAllowed = Number(0);
     }
     
   
     return [Number(cafesAllowed),Number(decafsAllowed)]
   }