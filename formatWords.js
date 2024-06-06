function formatWords(words){
    if (words == null){
      return '';
    }
    let arr = words.filter((x)=> x != '');
    let arr1 = [];
    if (arr.length == 1){
      return String(arr[0]);
    }else if (arr.length == 2){
      return `${arr[0]} and ${arr[1]}`;
    }else {
      for (let i = 0; i < arr.length; i++){
        if (i < arr.length -2){
          arr1.push(arr[i]);
          arr1.push(', ');
        }else if ( i == arr.length - 2){
          arr1.push(arr[i]);
        }else if(i == arr.length - 1){
          arr1.push(' and ');
          arr1.push(arr[i]);
        }   
      }  
    }
    return arr1.join('');
  }