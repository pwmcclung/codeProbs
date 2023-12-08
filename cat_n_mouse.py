def cat_mouse(x,j):
    cat = x.find('C')
    dog = x.find('D')
    mouse = x.find('m')
    dist = abs(cat - mouse)
    if cat == -1:
        return 'boring without all three'
    elif dog == -1:
        return 'boring without all three'
    elif mouse == -1:
        return 'boring without all three'
    
    if dist > j:
        return 'Escaped!'
    elif dist <=j:
        if  (dog > cat and dog > mouse):
            return 'Caught!'
        elif (dog < cat and dog < mouse):
            return 'Caught!'
        elif (dog > cat and dog < mouse) or (dog< cat and dog > mouse):
            return 'Protected!'