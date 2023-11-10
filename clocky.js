var whatTimeIsIt = function(angle) {

    let hourCalc = Math.floor( angle/30 )
    if (hourCalc === 0) {
      hourCalc = 12;
    }
    let minCalc = Math.floor( angle % 30 * 2)
    let totalTimeCalc = `${('0'+String(hourCalc)).slice(-2)}:${('0'+String(minCalc)).slice(-2)}`;
    return totalTimeCalc;
  }