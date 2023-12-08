def gimme_the_letters(sp):
    letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    first = letters.find(sp[0])
    second = letters.find(sp[-1])
    return letters[first:second+1]