function findAdmin(list, lang) {
    let newArr = [];
    for (let x of list){
      if (x.language == lang && x.githubAdmin == 'yes'){
        newArr.push(x);
      }
    }
   return newArr;
  }