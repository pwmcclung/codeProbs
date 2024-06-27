function vowelShift(text, n) {
    if (n == 0){
      return text;
    }
    let vowels = ['a', 'e','i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let arr = text.split('');
    let vowelsArr = [];
    for (let i = 0; i < arr.length;i++){
      if (vowels.includes(arr[i])){
        vowelsArr.push(arr[i]);
        arr[i] = '*';
      }
    }
    if (n > 0){
      let count = 0;
      while (count < n){
        let first = vowelsArr.pop();
        vowelsArr.unshift(first);
        count++;
      }
    }
    if (n < 0){
      let count = n;
      while (count < 0){
        let first = vowelsArr.shift();
        vowelsArr.push(first);
        count++;
      }
    }
    for(let i = 0; i < arr.length;i++){
      if (arr[i] == '*'){
        arr[i] = vowelsArr.shift();
      }
    }
    return arr.join('');
  }