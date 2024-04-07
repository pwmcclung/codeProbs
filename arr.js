function array10(){
    let chars = ['A','B','C', 'D'];
    let fullArr = [];
     for (let i = 0; i < 10; i++) {
       let arr = [];
      for (let j = 0; j < 10; j++) {
       arr.push(chars[ j < 4 ? j : Math.floor(Math.random() * chars.length)]);
      }
      fullArr.push(arr);
    }
    return fullArr;
  }