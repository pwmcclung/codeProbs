var lengthOfSequence = function (arr, n) {
    let newArr = arr.slice(arr.indexOf(n), arr.lastIndexOf(n)+1);
    let newArrCop = newArr.slice().filter((x)=> x == n);
    if (newArrCop.length != 2){
      return 0;
    }else{
      return newArr.length;
    }
  };