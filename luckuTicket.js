function luckCheck(ticket){
    let nums = '0123456789'.split('');
    let arr = ticket.split('');
    for (let x of arr){
      if (!nums.includes(x)){
        throw new Error('Invalid Input');
      }
    }
    let len = arr.length/2;
    if(ticket.length % 2 == 0){
      //even
      let left = arr.slice(0,len);
      let right = arr.slice(len,);
      let leftSum = left.reduce((a,b)=>Number(a)+Number(b),0);
      let rightSum = right.reduce((a,b) => Number(a) + Number(b),0)
      if (leftSum == rightSum){
        return true;
      }
      return false;
    }else if (ticket.length % 2 != 0){
      //odd, ignore middle
        let left = arr.slice(0,Math.ceil(len));
      let right = arr.slice(Math.ceil(len),);
      let leftSum = left.reduce((a,b)=>Number(a)+Number(b),0);
      let rightSum = right.reduce((a,b) => Number(a) + Number(b),0)
      if (leftSum == rightSum){
        return true;
      }
      return false;
    }
  }