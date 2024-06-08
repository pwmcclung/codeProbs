function decode(str) {
    if (typeof str != 'string'){
      return 'Input is not a string';
    };
   let letters = {'a':'z','b':'y','c':'x','d':'w','e':'v','f':'u','g':'t','h':'s','i':'r','j':'q','k':'p','l':'o','m':'n','n':'m','o':'l','p':'k',
                  'q':'j','r':'i','s':'h','t':'g','u':'f','v':'e','w':'d','x':'c',
                  'y':'b','z':'a','A':'Z','B':'Y','C':'X','D':'W','E':'V','F':'U','G':'T','H':'S','I':'R',
                  'J':'Q','K':'P','L':'O','M':'N','N':'M','O':'L','P':'K','Q':'J','R':'I',
                  'S':'H','T':'G','U':'F','V':'E','W':'D','X':'C','Y':'B','Z':'A'};
    let arr = str.split('');
    let newArr = arr.map((x)=> letters[x] || x);
    let newStr = newArr.join('');
    return newStr;
  }