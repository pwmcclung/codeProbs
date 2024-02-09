function drawSpider(legSize, bodySize, mouth, eye) {
    let leftLegDict = {1:"^",2:"/\\",3:"/╲",4:"╱╲"};
    let rightLegDict = {1:"^",2:"/\\",3:"╱\\",4:"╱╲"};
    let leftBodyDict = {1:"(", 2:"((", 3:"((("};
    let rightBodyDict = {1:")", 2:"))",3:")))"};
    let totalEyes = 2**bodySize;
    let leftEyes = eye.repeat(totalEyes / 2);
    let rightEyes = eye.repeat(totalEyes / 2);
    return `${leftLegDict[legSize]}${leftBodyDict[bodySize]}${leftEyes}${mouth}${rightEyes}${rightBodyDict[bodySize]}${rightLegDict[legSize]}`;
   
  }