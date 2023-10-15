function expandedForm(num) {
    let numStr = num.toString();
    let numArr = numStr.split('').reverse();
    let mapNum = numArr.map( (x,y) => x * Math.pow(10, y));
    let mapNumFiltered = mapNum.filter( x => x > 0).reverse()
    return mapNumFiltered.join(' + ');
  }