function jumble(string){
    let arr = string.split(' ');
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i].length <4){
        newArr.push(arr[i]);
      }else { 
      newArr.push(changer(arr[i]));
      }
    }
    return newArr.join(' ');
  }
  function changer(word){
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newWord = word.split('');
    if (!letters.includes(newWord[newWord.length-1])){
      let first = newWord[0];
      let last = newWord.slice(newWord.length-2,);
      let mid = newWord.slice(1,newWord.length-2).reverse();
      let newWord2 = first+mid+last
      return newWord2;
    }else{
      let first = newWord[0];
      let last = newWord.slice(newWord.length-1,);
      let mid = newWord.slice(1,newWord.length-1).reverse();
       let newWord2 = first+mid+last
      return newWord2;
    }
  }