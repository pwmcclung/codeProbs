function solve(s){
    let str = s.replace(/[^0123456789]/g, ' ');
    let arr = str.split(' ');
    let greatest = arr.reduce((greatest, x) => {
      return Number(x) > Number(greatest) ? x : greatest;
    }, '');
      return Number(greatest);
    }