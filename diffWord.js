var mispelled = function(word1, word2)
{
  let count = 0;
  let diff = Math.abs(word1.length - word2.length);
  if (diff > 1){
    return false;
  }else if (diff <= 1 && word1.includes(word2) || diff <= 1 && word2.includes(word1)){
    return true;
  }else if (word1.length === word2.length){
   for (let i = 0; i < word1.length; i++){
     if (word1[i] !== word2[i]){
       count++;
     }
     }
    if (count <= 1) return true;
  }
    return false;
}