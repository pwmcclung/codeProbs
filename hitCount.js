function counterEffect(hitCount) {
    let newArr = [];
    let arr = hitCount.split('');
     for (let x of arr){
       newArr.push(arrayMaker(Number(x)));
     }
     return newArr;
   }
   function arrayMaker(num){
     let arr = [];
     if (num == 0){
       arr.push(0);
     }else{
       let nummy = 0;
       while(nummy <= num){
         arr.push(nummy);
         nummy++;
       }
     }
     return arr;
   }