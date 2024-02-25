function isSameLanguage(list) {
    let count = [];
    list.forEach(x=>{
        count.push(x.language); 
    });
   let newCount = new Set(count);
    if (newCount.size == 1){
      return true;
    }else{
       return false;
    }
  }