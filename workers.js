function task(w, n, c) {
    if (w == 'Monday'){
      return `It is Monday today, James, you have to work, you must spray ${n} trees and you need ${c*n} dollars to buy liquid`;
    }else if (w == 'Tuesday'){
      return `It is Tuesday today, John, you have to work, you must spray ${n} trees and you need ${c*n} dollars to buy liquid`;
    }
     else if (w == 'Wednesday'){
      return `It is Wednesday today, Robert, you have to work, you must spray ${n} trees and you need ${c*n} dollars to buy liquid`;
    }else if (w == 'Thursday'){
      return `It is Thursday today, Michael, you have to work, you must spray ${n} trees and you need ${c*n} dollars to buy liquid`;
    }else{
      return `It is Friday today, William, you have to work, you must spray ${n} trees and you need ${c*n} dollars to buy liquid`;
    }
   }