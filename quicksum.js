function quicksum(packet){
    let alpha = { "A":1, "B":2, "C": 3, "D":4, "E": 5, "F":6, "G": 7, 
                 "H":8, "I":9, "J": 10, "K":11, "L":12, "M":13, "N":14, "O": 15, "P":16, "Q":17, "R": 18, 
                "S":19, "T":20, "U":21, "V":22, "W":23, "X":24, "Y":25, "Z":26, " ":0};
    let reg = "ABCDEFGHIJKLMNOPQRSTUVWZYZ ";
   if (!/^[A-Z ]+$/.test(packet)){
       return 0;
       };
    let count = 1
    let arrSum = [];
    for (let i = 0; i < packet.length; i++){
      arrSum.push(alpha[packet[i]] * count);
      count++;
    }
   return arrSum.reduce((a,b) => a + b,0);
  }