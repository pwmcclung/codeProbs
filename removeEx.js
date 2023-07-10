function remove (string) {
    let arr = string.split(' ');
    let ans = arr.map(x=>x.replace(/!+$/gi, ''));
    return ans.join(' ');
   }