def move_ten(st):
    new_st = list(st.lower())
    alpha = {'a':'k', 'b':'l', 'c':'m', 'd':'n', 'e':'o', 'f':'p', 'g':'q', 
              'h':'r', 'i':'s', 'j':'t', 'k':'u', 'l':'v','m':'w', 'n':'x', 
              'o':'y', 'p':'z', 'q':'a', 'r':'b', 's':'c', 't':'d', 'u':'e', 
              'v':'f', 'w':'g', 'x':'h', 'y':'i','z':'j'}
    newer_str = []
    for x in new_st:
        newer_str.append(alpha[x])
    return ''.join(newer_str)