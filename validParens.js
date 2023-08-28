function validParentheses(parenStr) {
    let arr = [];
    for (let  i of parenStr){
      if ('('.includes(i)){
        arr.push(i);
      }else if (i === ')'){
        if (arr.length == 0){
          return false;
        }if (arr.pop() != '('){
          return false;
        }
      }
    }
    if (arr.length != 0){
      return false;
    }
    return true;
  }