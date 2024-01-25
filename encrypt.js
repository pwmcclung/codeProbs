var encryptThis = function(text) {
    let arr = text.split(' ');
    let newText = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i].length === 1){
      newText.push(String(arr[i][0]).charCodeAt(0));
      }else if (arr[i].length === 2){
      newText.push(String(arr[i][0]).charCodeAt(0) + String(arr[i][1])); 
    }else if (arr[i].length === 3) {
      newText.push(String(arr[i][0]).charCodeAt(0)+ String(arr[i][2]) + String(arr[i][1]));
    }else if (arr[i].length >=4) {
      let first = String(arr[i][0]).charCodeAt(0);
      let second = String(arr[i][1]);
      let last = String(arr[i][arr[i].length -1]) 
      let middle = String(arr[i].slice(2,arr[i].length-1));
     newText.push(first + last + middle + second);
    }
  }
     return newText.join(' ');
    }