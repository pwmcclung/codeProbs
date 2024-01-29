function pattern(n){
    if (n < 1){
      return '';
    }
      let start = 1;
      let newStr = '';
      if (n == 1){
        return '1';
      }
      while (start < n){
        newStr += `${start}`.repeat(start) +'\n';
        start += 1;
      }
      newStr += `${n}`.repeat(n);
      return newStr;
    }