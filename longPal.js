longestPalindrome=function(s){

    if (s.length == 0){
      return 0; 
    }else{
      let currArr = [0,1];
      for(let i = 1; i < s.length; i++){
        let oddCount = expanded(s, i-1, i+1);
        let evenCount = expanded(s, i-1, i);
        let longest = oddCount[1] - oddCount[0]  > evenCount[1] - evenCount[0] ? oddCount:evenCount;
        currArr = currArr[1] - currArr[0] > longest[1] - longest[0] ? currArr : longest;
      }
      return   s.slice(currArr[0], currArr[1]).length;
     
  }
    }
  function expanded(s,left, right){
    while (left >=0 && right < s.length){
      if (s[left] !== s[right]) break;
      left--;
      right++;
    }
    return [left + 1, right]
  }