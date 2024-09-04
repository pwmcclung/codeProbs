class CommonDatatypes {
  
    check(arr){
      let numm = 0;
      let bool = 0;
      let str = 0;
      let obj = 0;
      for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == 'number'){
          numm++;
        }else if (typeof arr[i] == 'boolean'){
          bool++;
        }else if (typeof arr[i] == 'string'){
          str++;
        }else if (typeof arr[i] == 'object'){
          obj++;
        }
      }
      if (numm > obj && numm > bool && numm > str){
      return 'number'
    } else if (str > numm && str > obj && str > bool){
        return 'string';
      } else if (obj > numm & obj > bool && obj > str){
        return 'object';
      }else if (bool> numm & bool > str && bool> obj){
        return 'boolean';
      }else{
        return 'We got a tie!';
      }
    }
    
  }