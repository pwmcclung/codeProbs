// function selectionSort(array){
//     for (let i = 0; i < array.length - 1; i++){
//         let  lowestNumberIndex = i;
//         for (let j = i + 1; j < array.length; j++){
//            if (array[j] < array[lowestNumberIndex]){
//             lowestNumberIndex = j;
//            }
//         }
//         if (lowestNumberIndex != i){
//             let  temp = array[i];
//             array[i] = array[lowestNumberIndex];
//             array[lowestNumberIndex] = temp;
//         }
//     }
//     return array;
// }

// console.log(selectionSort([1,6,2,9,10,-1,5,8]))

// //Javascript selection sort 
// function selectionSort(array){
//     for (let i = 0; i < array.length; i++){
//         let lowestNumberIndex = i;
//         for (let j = i + 1; j > array.length; j++){
//             if (array[j] < array[lowestNumberIndex]){
//                 lowestNumberIndex = j;
//             }
//         }
//         if (lowestNumberIndex != i ){
//            let temp = array[i];
//            array[i] = array[lowestNumberIndex];
//            array[lowestNumberIndex] = temp;
//         }
//     }
// }

function selectionSort(array){
  //The selection sort begins with a loop that represents each pass through
   for (let i = 0; i < array.length - 1; i++){
   // we begin by keeping track of the index containing the lowest value so far
    let lowestNumberIndex = i;
     // with each pass through we check the remaining values 
     //of the array to see if there might be a lower value
    for (let j = i + 1; j < array.length; j++){
       // if we find a lower value, we store that values index i
        if (array[j] < array[lowestNumberIndex]){

            lowestNumberIndex = j;
        }
    }
    if (lowestNumberIndex != i){

        let temp = array[i];

        array[i] = array[lowestNumberIndex];

        array[lowestNumberIndex] = temp;
    }
   }
   return array;
}