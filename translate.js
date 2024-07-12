var toexuto = function(text) {
    let newText = text.split(' ')
    let newArr = [];
    for (let x of newText){
      newArr.push(textMaker(x)); 
    }
   return newArr.join(' ');
  };
  function textMaker(word){
     let alpha = {'a':'a', 'b':'ba', 'c':'ca', 'd':'da', 'e':'e', 'f':'fe', 
                'g':'ge', 'h':'he', 'i':'i', 'j':'ji', 'k':'ki', 'l':'li', 'm':'mi', 'n':'ni', 
                'o':'o', 'p':'po', 'q':'qo', 'r':'ro', 's':'so', 't':'to', 'u':'u', 'v':'vu', 
                'w':'wu', 'x':'xu', 'y':'yu', 'z':'zu','A':'A', 'B':'Ba', 'C':'Ca', 'D':'Da', 'E':'E', 'F':'Fe', 
                'G':'Ge', 'H':'He', 'I':'I', 'J':'Ji', 'K':'Ki', 'L':'Li', 'M':'Mi', 'N':'Ni', 
                'O':'O', 'P':'Po', 'Q':'Qo', 'R':'Ro', 'S':'So', 'T':'To', 'U':'U', 'V':'Vu', 
                'W':'Wu', 'X':'Xu', 'Y':'Yu', 'Z':'Zu', '.':'.', '?':'?', '!':'!'};
    let textArr = word.split('');
    let newTextArr = textArr.map((x)=>alpha[x]||x);
    let newText = newTextArr.join('');
    return newText;
  }
  