function checkVowel(string, position) {
    let vowels = 'aeiouAEIOU';
    if (vowels.includes(string[position])){
      return true;
    }
    return false;
  };