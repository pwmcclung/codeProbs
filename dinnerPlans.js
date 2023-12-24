function commonGround(s1, s2){
    let arr1 = s1.split(' ');
     let arr2 = s2.split(' ');
     let longest = arr1.length > arr2.length ? arr1 : arr2;
     let shortest = arr1.length > arr2.length ? arr2:arr1;
     let resultingString = '';
     for (let i=0;i<shortest.length;i++){
         if (longest.includes(shortest[i])) resultingString += shortest[i] + ' ';
     }
     resultingString = resultingString.trim();
     return resultingString.length ? resultingString : 'death';
     }
   
     function commonGround(s1, s2){
        let arr1 = s1.split(' ');
        let arr2 = s2.split(' ');
        let arr3 = arr1.filter((element) => arr2.includes(element));
        if (arr3.length === 0 ){
            return 'death';
        }else{
            return arr3.join(' ');
        }
     }