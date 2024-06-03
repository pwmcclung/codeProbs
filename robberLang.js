function robberEncode(sentence) {
    let letters = {'b':'bob', 'B':'BOB', 'c':'coc','C':'COC', 'd':'dod','D':'DOD', 'f':'fof', 'F':'FOF', 
                   'g':'gog', 'G':'GOG', 'h':'hoh', 'H':'HOH', 'j':'joj','k':'kok','K':'KOK', 's':'sos', 
                    't':'tot', 'T':'TOT', 'v':'vov', 'V':'VOV', 'w':'wow', 'W':'WOW', 'x':'xox', 'X':'XOX', 
                   'y':'yoy', 'Y':'YOY', 'z':'zoz', 'Z':'ZOZ', 'l':'lol', 'L':'LOL', 'r':'ror', 'R':'ROR', 'n':'non', 'N':'NON', 
                  'm':'mom', 'M':'MOM', 'S':'SOS', 'J':'JOJ', 'p':'pop', 'P':'POP', 'q':'qoq', 'Q':'QOQ'};
    let arr = sentence.split('');
    let newArr = arr.map((x) => letters[x] || x);
    let newSent = newArr.join('');
    return newSent;
  }