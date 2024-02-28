var firstPalindrome = function(words) {
    let wordArr = [];
   for (let i = 0; i < words.length; i++){
       let word = words[i] 
       let testWord = words[i].split('').reverse().join('');
       if (word == testWord){
           wordArr.push(word)
           break
       }    
   }
   if (wordArr.length >0){
       return wordArr[0];
    }else{
       return "";
   }
};