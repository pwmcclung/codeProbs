def tacofy(word):  
    word = word.lower()
    end = ['shell']
    front = ['shell']
    beefs = ['a', 'e', 'i', 'o', 'u']
    ingreds = []
    for x in range(len(word)):
        if word[x] in beefs:
            ingreds.append('beef')
        elif word[x] == 't':
            ingreds.append('tomato')
        elif word[x] == 'l':
            ingreds.append('lettuce')
        elif word[x] == 'c':
            ingreds.append('cheese')
        elif word[x]== 'g':
            ingreds.append('guacamole')
        elif word[x] == 's':
            ingreds.append('salsa')
    return front + ingreds + end