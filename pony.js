function riders(stations) {
    let riders = 0;
    let milesSum = 0;
    for (let i = 0; i <  stations.length; i++){
      milesSum += stations[i];
      if (milesSum > 100){
        riders++;
        milesSum = 0;
        i--;
      }
    }
    return riders + 1;
  }



  