function candies(kids){
    if (kids.length < 2){
      return -1;
    }
     let big = Math.max(...kids);
     let newArr = [];
   
     for (let i = 0; i < kids.length; i++){
       newArr.push(big - kids[i]);
     }
     return newArr.reduce((a,b) => a + b,0);
   }