def letter_check(arr): 
    one = list(arr[0].lower())
    two = list(arr[1].lower())
    check = True
    for e in two:
        if e not in one:
            check = False
    return check