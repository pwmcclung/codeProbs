function reverse(arr) {
    let count = 0;
    let negCount = 1;
    let len = arr.length / 2;
    if (arr.length % 2 == 0){
      while (count != len){
        let first = arr[count];
        arr[count] = arr[arr.length - negCount];
        arr[arr.length - negCount] = first;
        count++;
        negCount++;
      }
      return arr;
    }else if (arr.length % 2 != 0){
      let newLen = Math.ceil(len);
      while (count != newLen){
        let first = arr[count];
        arr[count] = arr[arr.length - negCount];
        arr[arr.length - negCount] = first;
        count++;
        negCount++;
      }
      return arr;
    }
 }