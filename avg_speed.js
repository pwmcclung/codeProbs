function calculateSpeed(distance, time) {
    let distanceMeters = parseInt(distance);
    if (distance.includes('km')){
      distanceMeters = distanceMeters * 1000;
    }
    let timeSecs = parseInt(time);
    if (time.includes('min')){
      timeSecs = timeSecs * 60;
    }
    let mph = Math.round((distanceMeters/timeSecs)*2.23694);
    return `${mph}mph`;
  }