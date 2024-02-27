function getAverageAge(list) {
    let ageSum = 0;
   for (let x of list){
     ageSum += x.age;
   }
    return Math.round(ageSum / list.length);
  }