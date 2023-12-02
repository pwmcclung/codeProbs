function scf(array){
    let arr = [];
    
    for (let i = 0; i < array.length; i++){
      arr.push(factorFinder(array[i]));
    }
    
  let newArr = [].concat(...arr).sort((a,b) => a  -b, 0);
    
  let mp = new Map();
        for (let i = 0; i < newArr.length; i++){
          if (mp.has(newArr[i])){
            mp.set(newArr[i],  1 + mp.get(newArr[i]));
          }else{
            mp.set(newArr[i], 1);
          }
        }
        let calcArr = [];
        for (let [key, value] of mp.entries()){
          if (value == array.length){
            calcArr.push(key);
          }
        }
     if (calcArr.length <= 1){
       return 1;
     }else{
       return calcArr[1];
     }
    }
  
  function factorFinder(num){
    let newArr = [];
    for (let i = 0; i <= num; i++){
      if (num % i == 0){
        newArr.push(i);
      }
    }
    return newArr;
  }