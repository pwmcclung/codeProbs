function convert(time){
    let newDate = new Date(time);
    let day = newDate.toTimeString().slice(0,8);
    let milli = String(newDate.getMilliseconds());
    while (milli.length <3){
      milli = '0' + milli
    }
    return `${day},${milli}`;
  }