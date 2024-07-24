function findHobbitsIn(manifest){
    let hobbits = [];
    for (let x of manifest){
      if (String(x.race).toLowerCase().includes('hobbit')){
        hobbits.push(x);
      }else if (String(x.race).toLowerCase().includes('halfling')){
        hobbits.push(x);
      }else if (String(x.home).toLowerCase().includes('shire')){
        hobbits.push(x);
      }else if (String(x.home).toLowerCase().includes('farthing')){
        hobbits.push(x);
      }else if (String(x.home).toLowerCase().includes('hobbiton')){
        hobbits.push(x);
      }
    }
    return hobbits;
  }