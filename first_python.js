function getFirstPython(list) {
    let newArr = [];
   for (let i = 0; i < list.length; i++){
     if (list[i].language == 'Python'){
       newArr.push(list[i]);
     }
   }
    let firstName;
    let country;
    if (newArr.length > 0){
       firstName = newArr[0].firstName;
        country = newArr[0].country;
      return `${firstName}, ${country}`;
    }
    return 'There will be no Python developers';
  }