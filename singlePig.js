function pigLatin(string){
    let lowerStr = string.toLowerCase();
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let lettersArr = letters.split('');
    let vowels = 'aeiou';
    let consonants = 'abcdfghjklmnpqrstvwxyz';
    let checkFilter = lowerStr.split('').filter((x)=> !letters.includes(x));
    if (checkFilter.length > 0){
      return null;
    }
    if (vowels.includes(lowerStr[0])){
      return String(lowerStr + 'way');
    }
    let vowelsCheck = lowerStr.split('').filter((x) => vowels.includes(x));
    if (vowelsCheck.length <=0){
      return String(lowerStr + 'ay');
    }
    let arr = lowerStr.split('');
    while(!vowels.includes(arr[0])){
      let first = arr.shift();
      arr.push(first);
    }
    arr.push('ay');
    return arr.join('');
  }