def how_much_coffee(events):
    score = 0
    for x in events:
        if x == 'cw' or  x == 'dog' or  x == 'cat' or x == 'movie':
            score += 1
        elif x == 'CW' or  x == 'DOG' or  x == 'CAT' or x == 'MOVIE':
            score += 2
    if score > 3:
        return 'You need extra sleep'
    else:
        return score