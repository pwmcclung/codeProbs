function cake(x, y){
    let alphaPosition = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 
                   'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 
                   'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24,'y':25, 'z':26};
    let asciiPos = {'a':97, 'b':98, 'c':99, 'd':100, 'e':101, 'f':102, 'g':103, 
                   'h':104, 'i':105, 'j':106, 'k':107, 'l':108, 'm':109, 'n':110, 'o':111, 'p':112, 
                   'q':113, 'r':114, 's':115, 't':116, 'u':117, 'v':118, 'w':119, 'x':120,'y':121, 'z':122};
    let sumEven = 0;
    let sumOdd = 0;
    let arr = y.split('');
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++){
      if (i % 2 == 0){
        even.push(arr[i]);
      }else if (i % 2 != 0){
        odd.push(arr[i]);
      }
    }
    sumEven = even.map(x => asciiPos[x]).reduce((a,b) => a + b, 0);
    sumOdd = odd.map(x => alphaPosition[x]).reduce((a,b) => a + b, 0);
    let total = sumEven + sumOdd;
    let percent = (total / x)* 100;
   
    if (percent > 70){
      return 'Fire!';
    }else{
      return  'That was close!';
    }
   
  }