function solve(st,a,b){
    let arr = st.split('');
   if (a > 0 && b < arr.length){
     let first = arr.slice(0, a);
     let end = arr.slice(b+1, );
     let section = arr.slice(a,b+1).reverse();
     return first.concat(section).concat(end).join('');
   }else if (a == 0 && b <arr.length){
     let section = arr.slice(a,b+1).reverse();
     let end = arr.slice(b+1, );
     return section.concat(end).join('');
   }else if (a > 0 && b >= arr.length){
     let first = arr.slice(0, a);
     let section = arr.slice(a,b+1).reverse();
     return first.concat(section).join('');
 }else if ( a == 0 && b >= arr.length){
   let section = arr.slice(a,arr.length).reverse().join('');
   return section;
 }
 }