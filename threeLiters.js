function canIMeasure(a, b, c) {
    return (c <= b && c % myGcd(a,b) == 0);
 }
 
 function myGcd(x,y){
   if (y){
     return myGcd(y, x % y);
   }else{
     return Math.abs(x);
   }
 }