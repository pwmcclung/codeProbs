function reverseMessage(str) {
    str = str.toLowerCase();
    let arr = str.split(' ');
   arr = arr.reverse();
   let newArr = [];
   for (let i = 0; i < arr.length; i++){
      let newWord = arr[i].split('').reverse().join('');
     let word1 = newWord.slice();
     let word2 = newWord.slice();
     let newWord1 = word1.slice(0,1).toUpperCase();
     let newWord2 = word2.slice(1,);
     let newWord3 = newWord1 + newWord2;
     newArr.push(newWord3)
   }
   return newArr.join(' ');
 }