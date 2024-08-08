function fix(paragraph){
    if (paragraph.length == 0){
      return '';
    }
    let arr = paragraph.split('. ');
     let newArr = [];
     if (arr.length == 1){
       let first = arr[0][0];
       let second = arr[0].slice(1,);
       let newFirst = first.toUpperCase();
       return newFirst + second;
     }else{
       for (let i = 0; i < arr.length;i++){
       let first = arr[i][0];
       let second = arr[i].slice(1,);
       let newFirst = first.toUpperCase();
       newArr.push(newFirst + second);
       }
       return newArr.join('. ')
     }
   }