function adjacentElementsProduct(array) {
  let numStore = (-Infinity);
  let arrMappings = array.map((x,i,arr)=>arr[i] * arr[i + 1] > numStore ? numStore = arr[i] * arr[i + 1] : numStore);
  return numStore;
  
}