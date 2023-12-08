function humanReadable (seconds) {
    if (seconds === 0){
      return '00:00:00';
    }
    let numSeconds = (seconds % 60);
    let numMinutes = Math.floor((seconds / 60) % 60);
    let numHours =   Math.floor(seconds /3600);
    if (numSeconds < 10){numSeconds = '0' + numSeconds};
    if (numMinutes < 10){numMinutes = '0' + numMinutes};
    if (numHours < 10) {numHours = '0' + numHours};
    
    return `${numHours}:${numMinutes}:${numSeconds}`;
    }