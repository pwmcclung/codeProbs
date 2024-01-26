def what_list_am_i_on(actions):
    naughty_count = 0
    nice_count = 0
    for x in actions:
        if x[0] == 'b' or x[0] == 'f' or x[0] == 'k':
            naughty_count += 1
        elif x[0] == 'g' or x[0] == 's' or x[0] == 'n':
            nice_count += 1
    if naughty_count >= nice_count:
        return 'naughty'
    else:
        return 'nice'