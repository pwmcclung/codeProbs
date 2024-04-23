function calculateHypotenuse(a, b) {
    if (a > 0 && b > 0 && typeof a == 'number' && typeof b =='number'){
       let a2 = a * a;
      let b2 = b * b;
      let ans = Number(Math.sqrt(a2+b2).toFixed(3));
      return ans;
    }else{
     throw new Error('Only Integers Above Zero Are Allowed');
    }
  }