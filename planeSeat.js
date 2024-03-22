function planeSeat(a){
    let num, spot;
     if (a.length>2){
      num = Number(a.slice(0,2));
       spot = a.slice(2);
     }else{
       num = Number(a.slice(0,1));
       spot = a.slice(1);
     }
    let left = ['A', 'B', 'C'];
    let mid = ['D', 'E', 'F'];
    let right = ['G', 'H', 'K'];
   if(num<=20){
     if (left.includes(spot)){
       return 'Front-Left';
     }else if (mid.includes(spot)){
       return 'Front-Middle';
     }else if (right.includes(spot)){
       return 'Front-Right';
     }
   }else if (num <=40){
     if (left.includes(spot)){
       return 'Middle-Left';
     }else if (mid.includes(spot)){
       return 'Middle-Middle';
     }else if (right.includes(spot)){
       return 'Middle-Right';
     }
   }else if (num <= 60){
      if (left.includes(spot)){
       return 'Back-Left';
     }else if (mid.includes(spot)){
       return 'Back-Middle';
     }else if (right.includes(spot)){
       return 'Back-Right';
     }
   }
    return 'No Seat!!';
  }