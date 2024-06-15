function getLosAngelesPoints(results) {  
    let arr = 0;
    for (let i = 0; i < results.length; i++){
      if (String(results[i][0])== 'Los Angeles Lakers' || String(results[i][0])== 'Los Angeles Clippers'||String(results[i][0])== 'Los Angeles Vulcans'){
     arr += Number(results[i][1].split(':')[0]);
    }  
  }
   return arr;
    }