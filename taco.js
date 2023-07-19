function tacofy(word) {
    let letterDict = {'a':'beef', 'e':'beef', 'i':'beef', 'o': 'beef', 'u':'beef', 't':'tomato', 'l':'lettuce', 'c':'cheese', 'g':'guacamole', 's':'salsa'};
    let wordArr = word.toLowerCase().split('')
    let newArr = wordArr.map((x)=> letterDict[x] || '');
    newArr.unshift('shell');
    newArr.push('shell');
    let fixedArr = newArr.filter((x) => x !== '');
   return fixedArr;
  }