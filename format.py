def print_nums(*args):
    lst = [x for x in args]
    big = ''
    if len(lst) > 0:
        big  = sorted(lst)[-1]
    newBig = len(str(big))
    count, newStr = 0, []
    if len(lst) == 0:
        return ''
    if len(lst) == 1:
        return str(lst[0])
    else:
        while count < len(lst) - 1:
            if len(str(lst[count])) != newBig:
                newStr.append(str(lst[count]).zfill(newBig) + '\n')
            else:
                newStr.append(str(lst[count]) + '\n')
            count += 1
    newStr.append(str(lst[-1]).zfill(newBig))
    return ''.join(newStr)