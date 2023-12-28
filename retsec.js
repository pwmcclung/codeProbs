function reverseByCenter(s){
    let first, second, mid, midEl;
    if (s.length % 2 != 0){
      mid = Math.floor(s.length / 2);
      first = s.slice(0, mid);
      second = s.slice(mid + 1, );
      midEl = s.slice(mid, mid+1)
      return second + midEl + first
    }else{
      mid = s.length / 2;
      first = s.slice(0,mid);
      second = s.slice(mid,);
      return second + first;
    }