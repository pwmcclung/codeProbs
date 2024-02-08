def pig_latin(word):
    if len(word) < 4:
        return word
    else:
        return word[1:] + word[0] + 'ay'