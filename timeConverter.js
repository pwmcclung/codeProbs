function timeConvert(num) {  
    if(num <= 0){ 
      return '00:00';
    }; 
     let hours = num / 60; 
    let mins = num % 60; 
    let arr = String(hours).split('.')
    let first = Number(arr[0]);
    if (first <10){
      first = '0' + first;
    };
      if (mins < 10){
        mins = '0'+ mins;
      };
      return `${first}:${mins}`;
    }
     