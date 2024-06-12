function birdCode(arr){
    let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(birdMaker(arr[i]))
  }
  return newArr;
  }
  function birdMaker(birdName){
    let arr = birdName.replace(/[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~-]/g, ' ').split(' ');
    if (arr.length == 1){
      let word = String(arr[0].slice(0,4)).toUpperCase();
      return word;
    }else if(arr.length == 2){
      let first = String(arr[0].slice(0,2)).toUpperCase();
      let second = String(arr[1].slice(0,2)).toUpperCase();
      return first+second;
    }else if(arr.length == 3){
      let first = String(arr[0].slice(0,1)).toUpperCase();
      let second = String(arr[1].slice(0,1)).toUpperCase();
      let third = String(arr[2].slice(0,2)).toUpperCase();
      return first+second+third;
    }else if (arr.length == 4){
      let first = String(arr[0].slice(0,1)).toUpperCase();
      let second = String(arr[1].slice(0,1)).toUpperCase();
      let third = String(arr[2].slice(0,1)).toUpperCase();
      let fourth = String(arr[3].slice(0,1)).toUpperCase();
      return first+second+third+fourth;
    }
  }
  