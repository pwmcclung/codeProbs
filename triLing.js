
function trilingualDemocracy(group) {
    let langArr = ['D', 'F', 'K', 'I'];
    let arr = group.split(''); 
    if (arr[0] == arr[1] && arr[0] == arr[2]){
      return String(arr[0]);
    }else if (arr[0] != arr[1] && arr[0] != arr[2] && arr[1] != arr[2]){
      let ans = langArr.filter( x => !arr.includes(x));
      return String(ans);
    }else {
       let newArr = arr.find(x => arr.indexOf(x) == arr.lastIndexOf(x));
    return String(newArr[0]);
    }
    }