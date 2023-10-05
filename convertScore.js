function scoreboard(string) {
    let scoreArr = {'nil':0, 'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9};
    let newArr = string.split(' ');
     let arr = newArr.map((x) => scoreArr[x] || 0);
     arr = arr.slice(arr.length-2,);
     return arr;
   }

   