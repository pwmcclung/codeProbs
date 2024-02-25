var finalString = function(s) {
  
    let arr = s.split('');
    let newArr = [];
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != 'i'){
            newArr.push(arr[i]);
        }else{
            newArr.reverse();
        }
    }
    return newArr.join('');
};