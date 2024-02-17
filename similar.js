function similarity(a, b) {
    let similarBoth = a.filter((x) => b.includes(x));
     let both = a.concat(b);
     let inBoth = new Set(both);
     let arr = Array.from(inBoth);
     return similarBoth.length/arr.length; 
   }