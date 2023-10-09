String.prototype.ipv4Address=function(numStr){
    let tested = /^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){4}$/
   .test(this);
    return tested;
  }