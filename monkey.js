function countzero(s){
    let onePoint = ['a','b','d','e','g','o','p','q','0','6','9','D','O','P','Q','R'];
    let twoPoints = ['%','&','B','8'];
    let newArr = [];
    let arr= s.split('');
    for (let i = 0; i < arr.length;i++){
      if (onePoint.includes(arr[i])){
        newArr.push(1);
      }else if (twoPoints.includes(arr[i])){
        newArr.push(2);
      } else if (arr[i] == '(' && arr[i+1] == ')'){
        newArr.push(1)
      }
    }
    return newArr.reduce((a,b) => a + b,0);
  }