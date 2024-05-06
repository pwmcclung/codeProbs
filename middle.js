function reverseMiddle(array) {
	if (array.length % 2 !== 0){
    //odd
    let middle = Math.ceil(array.length / 2)
    let sliced = array.slice(middle-2, middle + 1);
    return sliced.reverse();
  }else{
    //even
    let middle = array.length/2;
    let sliced = array.slice(middle-1, middle + 1);
    return sliced.reverse();
  }
}