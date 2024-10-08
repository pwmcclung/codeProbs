function testit(s){
    if (s == ""){
      return "";
    } 
    let s_arr = s.split(" ");
    for (let i = 0; i < s_arr.length; i++) {
    let a = s_arr[i];
     if (a.length > 1) {
       s_arr[i] = a.substring(0, a.length - 1) + a.substring(a.length - 1).toUpperCase();
     } else {
     s_arr[i] = a.toUpperCase();
      }
          }
  return s_arr.join(" ");
  }