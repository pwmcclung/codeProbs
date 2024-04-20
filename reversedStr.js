function reverseAndMirror(s1,s2) {
    let firstStrA = secondStr(s1);
    let firstStrB = firstStrA.split('').reverse().join('');
    let newWord = secondStr(s2)+'@@@'+firstStrA+firstStrB;
    return newWord;
  }
  function secondStr(st){
    let newSt = st.split('').reverse();
    let arr = [];
    for (let i = 0; i < newSt.length; i++){
      if (newSt[i] == newSt[i].toLowerCase()){
        arr.push(newSt[i].toUpperCase());
      }else {
        arr.push(newSt[i].toLowerCase());
      }
    }
    return arr.join('');
  }