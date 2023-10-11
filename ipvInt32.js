function ipToInt32(ip){
    let int32Display = ip.split('.')
    let answer = int32Display.reduce(function(ele, i){return ele * 256 + + i });
    return answer;
  }