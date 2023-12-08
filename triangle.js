function triangleType(a, b, c){
    let biggest = Math.max(a,b,c)
   
   if (a+b+c <= 2 * biggest){
     return 0
   }
       
   if (2 * biggest * biggest  == a * a + b * b + c * c){
     return 2
   }
       
   if (2 * biggest * biggest  > a * a + b * b + c * c){
      return 3
   }
      
   else{
     return 1
   }
       
}