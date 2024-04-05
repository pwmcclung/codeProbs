var Calculator = {
    average: function(...args) {
     if (args){
       return (args.reduce((a,b)=> a + b, 0) / args.length)||0;
     }
      
   }
     }