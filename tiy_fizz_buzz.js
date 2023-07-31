function tiyFizzBuzz(sentence){
    let arr = sentence.split('');
    let newArr = [];
    let upperConsts = [ 'B', 'C','D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W','X', 'Y', 'Z'];
    let upperVowel = ['A', 'E', 'I', 'O', 'U'];
    let lowerVowel = ['a', 'e','i', 'o', 'u'];
    for (let i = 0; i < arr.length; i++){
      if (upperConsts.includes(arr[i])){
        newArr.push("Iron");
      }else if (upperVowel.includes(arr[i])){
        newArr.push("Iron Yard");
      }else if (lowerVowel.includes(arr[i])){
        newArr.push("Yard");
      }else{
        newArr.push(arr[i]);
      }
    }
    return newArr.join('');
  }