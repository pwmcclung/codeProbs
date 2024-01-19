// TODO: implement the four functions specified.
function head(arr){
    let arr1 = arr.slice();
    return arr1[0];
  }
  function tail(arr){
    let arr1 = arr.slice();
    return arr1.slice(1,);
  }
  function init(arr){
    let arr1 = arr.slice();
    return arr1.slice(0, arr1.length-1);
  }
  function last(arr){
    let arr1 = arr.slice();
    return arr1[arr1.length -1];
  }