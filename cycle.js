function distanceCycled(cadence, gear, time) {
    let circ = 2.11115;
    let gearArr = gear.split('x');
    let front = Number(gearArr[0]);
    let rear = Number(gearArr[1]);
    let dev = circ * (front / rear); //meters
    let dist = ((cadence * time * dev)/1000).toFixed(3);
    return `You cycled ${dist} kilometers!`;
  }