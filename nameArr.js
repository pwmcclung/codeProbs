function capMe(names) {
    let newArr = [];
    for (let i = 0; i < names.length; i++){
      newArr.push(capper(names[i]));
    }
    return newArr;
  }
  function capper(name){
    let newName = name.toLowerCase();
    let first = newName.slice(0,1).toUpperCase();
    let second = newName.slice(1,);
    return first + second;
  }