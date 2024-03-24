function stockList(listOfArt, listOfCat){
    if(listOfArt.length===0||listOfCat.length===0) return '';
     let arr = [];
     let l = '';
     let m = 0;
     for (let i=0; i < listOfCat.length; i++){
     l = listOfCat[i];
     m = 0;
     for (let j=0;j<listOfArt.length;j++){
     if (listOfArt[j][0] == listOfCat[i]){
       m += listOfArt[j].match(/[\d]+/g) * 1}
     };
     let str=`(${l} : ${m})`;
     arr.push(str);
     }
     return arr.join(' - ');
   }