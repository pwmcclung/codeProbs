function nonsense(str) {
    str = str.toLowerCase();
    let switched = {'0':'a', '1':'e', '2':'i','3':'o', '4':'u'};
    let tRex = 'trex'
    let rapty = 'raptor'
    let spaceI = ' i ';
    let newStr = str.split('').map((x)=>  switched[x] || x ).join('');
    if (newStr.includes(tRex)){
      newStr = newStr.replace(/trex/g, '');
    }
    if (newStr.includes(rapty)){
      newStr = newStr.replace(/raptor/g,'');
    }
    if (newStr.includes(spaceI)){
      newStr =  newStr.replace(/ i /g, ' I ');
    }
    if (newStr[newStr.length -1] != '.'){
      return newStr.charAt(0).toUpperCase() + newStr.slice(1,) + '.';
    }else{
      return newStr.charAt(0).toUpperCase() + newStr.slice(1,);
    }  
  }