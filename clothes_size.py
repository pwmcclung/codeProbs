def size_to_number(size):
    baseS = 36
    baseM = 38
    baseL = 40
    if len(size) == 1:
        if size == 's':
            return baseS
        if size == 'm':
            return baseM
        if size == 'l':
            return baseL
    length = len(size)
    lst = list(size)
    allowed = ['s', 'm', 'l']
    if len(size) > 1 and all([x == 'x' for x in lst[0:-1]]) and lst[-1] in allowed:
        if lst[-1] == 's':
            return 36 - ((length - 1) * 2)
        elif lst[-1] == 'l':
            return 40 + ((length - 1) * 2)
        else:
            return None