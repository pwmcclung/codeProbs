function repeats(arr){
    let mp = new Map();
      for (let i = 0; i < arr.length; i++){
        if (mp.has(arr[i])){
          mp.set(arr[i],  1 + mp.get(arr[i]));
        }else{
          mp.set(arr[i], 1);
        }
      }
      let calcArr = [];
      for (let [key, value] of mp.entries()){
        if (value ==1){
          calcArr.push(key);
        }
      }
      return calcArr.reduce((a,b) => a + b, 0);
      
    };