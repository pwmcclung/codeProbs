function calculate(a, o, b) {
    var result = 0;
    
    if(o === "+") { 
      return a + b;
      }
     
      else if(o == "-") {
        return a - b;
    }else  if(o == "/" && b !== 0) { 
      return a / b;
   }else  if(o === "*") {
      return a * b;
      }
       return result || null; 
    }
    