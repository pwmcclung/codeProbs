function deleteNth(arr,n){
    let frequency = {};
    let newArr = arr.filter(ele => (frequency[ele] =~~ frequency[ele] + 1) <= n);
    return newArr;
  }