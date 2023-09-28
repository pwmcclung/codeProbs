function dadFilter(str){
  
    let trimmed =  str.trim(); 
     let replaced = trimmed.replace(/,*$/g,''); 
     let replaced2 = replaced.replace(/,+/g, ','); 
     return replaced2;
     
    }