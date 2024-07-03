function findSenior(list) {
    let ages = [];
    let newArr = [];
   for (let x of list){
     ages.push(x.age);
   }
   let maximum = Math.max(...ages);
   for (let x of list){
    if (x.age == maximum){
      newArr.push(x);
    }
   }
   return newArr;
  }