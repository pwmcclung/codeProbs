function solve(s, k){
    let string1 = s.split('');
    let sortedStr = string1.sort();
    let newSortedStr = sortedStr.slice(0,k);
    let freq = {};
    for(let letter of newSortedStr){
      freq[letter] = freq[letter] ? freq[letter] + 1 : 1;
    }
    s = s.split('').map((x,i,arr) => {
      if (freq[x] > 0){
        freq[x]--;
        return x = '';
      }
      return x;
    })
  return s.join('');
}