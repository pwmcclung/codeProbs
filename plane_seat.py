def plane_seat(a):
    lstA = list(a)
    if len(lstA)>2:
        num = int(''.join(lstA[0:2]))
        spot = str(lstA[2])
    else:
        num = int(''.join(lstA[0]))
        spot = str(lstA[1])
    left = ['A','B', 'C']
    middle = ['D', 'E', 'F']
    right = ['G', 'H', 'K']
    
    if num <= 20:
        if spot in left:
            return 'Front-Left'
        elif spot in middle:
            return 'Front-Middle'
        elif spot in right:
            return 'Front-Right'
    elif num <=40:
        if spot in left:
            return 'Middle-Left'
        elif spot in middle:
            return 'Middle-Middle'
        elif spot in right:
            return 'Middle-Right'
    elif num <= 60:
        if spot in left:
            return 'Back-Left'
        elif spot in middle:
            return 'Back-Middle'
        elif spot in right:
            return 'Back-Right'
    return 'No Seat!!'