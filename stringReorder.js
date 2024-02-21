function sentence(List) {
    let newList = List.sort((a,b) => Object.keys(a)[0] - Object.keys(b)[0]);
   return newList.map(x => Object.values(x)[0]).join(' ');
 }