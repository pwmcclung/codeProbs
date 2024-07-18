def game(a, b):
    mike = a
    joe = b
    if mike == 0 or joe == 0:
        return "Non-drinkers can't play"
    turn = True
    count = 0
    while turn == True:
        count += 1
        if count % 2 != 0:
            if mike - count < 0:
                return 'Joe'
                turn = False
            if mike - count > 0:
                mike = mike - count
        if count % 2 == 0:
            if joe - count < 0:
                return 'Mike'
                turn = False
            if joe - count > 0:
                joe = joe - count