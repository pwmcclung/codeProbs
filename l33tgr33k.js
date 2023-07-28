function GrεεκL33t(str){
    str = str.toLowerCase();
    let strArr = str.split(' ');
    let newStrArr = [];
    for (let i = 0; i < strArr.length; i++){
      newStrArr.push(helpy(strArr[i]));
    }
    return newStrArr.join(' ');
  }
  function helpy(word){
     let l33tgr33k = {'a':'α', 'b':'β', 'd':'δ','e':'ε','i':'ι',
                   'k':'κ','n':'η','o':'θ','p':'ρ','r':'π','t':'τ','u':'μ','v':'υ',
                   'w':'ω','x':'χ', 'y':'γ'};
    let newWord = word.split('').map(x => l33tgr33k[x] || x).join('');
    return newWord;
  }