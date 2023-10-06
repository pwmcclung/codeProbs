function stringBreakers(n, string){
    let crunchStr = string.replace(/\s/g, '');
    let arr = [];
    for (let i = 0; i <crunchStr.length; i += n){
       arr.push(crunchStr.slice(i, i + n))
      arr.push('\n');
    }
   return arr.slice(0, arr.length-1).join('');
 }