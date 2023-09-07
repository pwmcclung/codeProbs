function mixFruit (arr) {
    let arr2 = [];
   for (let i = 0; i < arr.length; i++){
     arr2.push(arr[i].toLowerCase());
   }
    let costs = {'banana': 5, 'orange':5, 'apple':5, 'lemon':5, 'grapes':5, 'avocado': 7, 'strawberry':7, 'mango':7};
    let newArr = arr2.map((x) => costs[x] || 9);
   
    let newArrSumMean = newArr.reduce((a,b) => a + b, 0) / newArr.length;
   
   return Math.round(newArrSumMean);
 
 }