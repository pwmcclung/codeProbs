function findGlasses(arr){
    for (let x of arr){
      if (/O-+O/.test(x)){
          return arr.indexOf(x);
      }
    }
  }