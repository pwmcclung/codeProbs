def flick_switch(lst):
    new_arr = []
    switch = True
    for x in lst:
        if switch== True and x != 'flick':
            new_arr.append(True)
            switch = True
        elif switch == True and x == 'flick':
            switch = False
            new_arr.append(False)
        elif switch == False and x != 'flick':
            switch = False
            new_arr.append(False)
        elif switch == False and x == 'flick':
            switch = True
            new_arr.append(True)
    return new_arr