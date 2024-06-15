function rank(st, we, n) {
    let strArr = st.split(',');
      if (strArr == ''){
        return 'No participants';
      }
    if (n > strArr.length){
      return 'Not enough participants';
    }
    let newArr = [];
    for( let i = 0; i < strArr.length; i++){
      let points = nameCalc(strArr[i])* we[i]
      newArr.push( points)
    }
  let obj = createObject(strArr,newArr);
  
  let newObj = sortObj(obj);
    return String(newObj[n-1])
    
  }
  
  function nameCalc(name){
    let newName = name.toLowerCase();
    let nameWeights = {'a': 1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 
                      'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 
                      'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26};
    let len = newName.length;
    let nameArr = newName.split('');
    let nameCal = nameArr.map((x)=>nameWeights[x]);
    let nameSum = nameCal.reduce((a,b) => a + b,0);
    return nameSum + len; 
  }
  
  function createObject(keys, values) {
      let result = {};
      let length = Math.min(keys.length, values.length);
      for (let i = 0; i < length; i++) {
          result[keys[i]] = values[i];
      }
      return result;
  }
  function sortObj(obj) {
      return Object.entries(obj)
          .sort((a, b) =>
              a[1] !== b[1] ?
              b[1] - a[1] :
              b[0] < a[0] ? 1 : -1
          )
          .map(e => e[0]);
  }