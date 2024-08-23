function arrange(arr){
    let ks = []; 
    let gs = [];
    let ts = [];
    for (let i = 0; i< arr.length;i++){
      if (arr[i].includes('K') && arr[i].includes('G')){
        ks.push(arr[i]);
      }else if (arr[i].includes('G') && !arr[i].includes('K')){
        gs.push(arr[i]);
      }else if (arr[i].includes('T')){
        ts.push(arr[i]);
      }
    }
     let ks1 = ks.sort((a,b) => parseInt(a)  - parseInt(b));
     let gs1 = gs.sort((a,b) => parseInt(a) - parseInt(b));
     let ts1 = ts.sort((a,b) => parseInt(a)  -  parseInt(b));
     return gs1.concat(ks1.concat(ts1));
    
    }