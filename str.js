function gHappy(str) {
    let answer = str.replace(/g{2,}/gi, '').match(/g/) === null;
    return answer;
  }