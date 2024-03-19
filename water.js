function separateLiquids(glass) {
    let obj = {
       Oil:0,
       Alcohol:0,
       Water:0,
       Honey:0
     }
     let newGlass = glass.map( v => v.map(x=>{
       if(x==='O') obj.Oil += 1
       if(x==='A') obj.Alcohol += 1
       if(x==='W') obj.Water += 1
       if(x==='H') obj.Honey += 1
     }))
     for(let i = 0; i<glass.length; i++){
       for(let j = 0; j<glass[i].length; j++){
         if(obj.Oil){
           newGlass[i][j] = 'O';
           obj.Oil -= 1;
         }
         else if(obj.Alcohol){
           newGlass[i][j] = 'A';
           obj.Alcohol -= 1;
         }
         else if(obj.Water){
           newGlass[i][j] = 'W';
           obj.Water -= 1;
         }
         else if(obj.Honey){
           newGlass[i][j] = 'H';
           obj.Honey -= 1;
         }
       }
     }
     return newGlass;
   }