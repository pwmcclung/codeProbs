def bear_fur(bears):
    if bears[0] == 'black' and bears[1] == 'black':
        return 'black'
    elif bears[0] == 'brown' and bears[1] == 'brown':
        return 'brown' 
    elif bears[0] == 'white' and bears[1] == 'white':
        return 'white' 
    elif (bears[0] == 'black' and bears[1] == 'brown') or (bears[0] == 'brown' and bears[1] == 'black'):
        return 'dark brown'
    elif (bears[0] == 'black' and bears[1] == 'white') or (bears[0] == 'white' and bears[1] == 'black'):
        return 'grey'
    elif (bears[0] == 'brown' and bears[1] == 'white') or (bears[0] == 'white' and bears[1] == 'brown'):
        return 'light brown'
    else:
        return 'unknown'