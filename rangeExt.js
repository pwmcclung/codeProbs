
function solution(list) {
    let extRange = "";
    let  temporary = "";
    for (let i = 0; i < list.length; i++) {
        if (rangeExtractor(list[i], list[i + 1]) !== 1) {
            extRange += list[i] + ",";
            temporary = "";
        } else {
            let j = i;
            let count = 0;
            for ( ; j < list.length; j++) {
                if (rangeExtractor(list[j], list[j + 1]) === 1) {
                    temporary = list[j + 1];
                    count++;
                } else {
                    extRange += list[i];
                    i = j;
                    break;
                }
            }
          if (count >1){
            extRange = extRange + "-" + temporary + "," ;
          }else{
            extRange = extRange + "," + temporary + ",";
          }
        
        }
    }
    return extRange.slice(0, -1);
}
function rangeExtractor(x,y){
  if (x > y){
    return Math.abs(x - y);
  }else {
    return Math.abs(y-x);
  };
}