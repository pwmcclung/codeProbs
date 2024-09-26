function repairKitty(eliaShared, eliaBorrowed, lyannaShared, lyannaBorrowed) {
    let eliaOwes = 0;
     let lyannaOwes = 0;
     if (eliaBorrowed > eliaShared){
       eliaOwes = Math.abs(eliaBorrowed - eliaShared) / 2;
     }
     if (lyannaBorrowed > lyannaShared){
       lyannaOwes = Math.abs(lyannaBorrowed - lyannaShared) / 2;
     }
     if (eliaBorrowed < eliaShared){
       lyannaOwes += (eliaShared - eliaBorrowed)/2;
     }
     if (lyannaBorrowed < lyannaShared){
       eliaOwes += (lyannaShared - lyannaBorrowed)/2;
     }
    if (eliaOwes > lyannaOwes){
      return `Elia owes Lyanna ${eliaOwes-lyannaOwes}`;
    }else if (lyannaOwes > eliaOwes){
      return `Lyanna owes Elia ${lyannaOwes-eliaOwes}`;
    }else{
      return `The kitty is already even`;
    }
   }