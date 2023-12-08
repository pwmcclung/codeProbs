function parse( data )
{
  let dataArr = data.split('');
  let opps = dataArr.length;
  let num = 0;
  let arr = [];
  while (opps > 0){
    
    let move = dataArr.shift();
    if (move == 'i'){
      num += 1;
    };
    if (move == 's'){
      num = num * num;
    };
    if (move == 'd'){
      num -= 1;
    };
    if (move == 'o'){
      arr.push(num);
    }
    opps --;
  }
  return arr;
}