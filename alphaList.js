function sortIt(list, n) {
    let listArr = list.split(', ');
    let m = n - 1;
    let newstArr = []
    let sortedArr = listArr.sort(function(a,b) {
      let comp1 = a.toLowerCase().charCodeAt(m);
      let comp2 = b.toLowerCase().charCodeAt(m);
      return comp1 === comp2 ? a.localeCompare(b) : comp1 - comp2;
  }
    );
    return sortedArr.join(', ');
  }