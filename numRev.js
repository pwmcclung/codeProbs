function reverse(n){
 let reversed = 0;
  while (n > 0){
    reversed *= 10;
    reversed += n % 10;
    n -= n % 10;
    n /= 10;  
  };
  return reversed;
}