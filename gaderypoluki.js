let letters = {'A':'G', 'a':'g', 'D':'E', 'd':'e', 'R':'Y', 'r':'y', 'P':'O', 'p':'o', 'L':'U', 'l':'u', 'K':'I', 'k':'i',
                  'G':'A', 'g':'a', 'E':'D', 'e':'d', 'Y':'R', 'y':'r', 'O':'P', 'o':'p', 'U':'L', 'u':'l', 'I':'K', 'i':'k'};
function encode(str) 
{ 
    return str.split('').map(x => letters[x] || x).join('');
}

function decode(str) 
{
   return str.split('').map(x => letters[x] || x).join('');
}