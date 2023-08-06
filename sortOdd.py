def sort_array(source_array):
    lst = source_array.copy()
    newArr = []
    oddArr = []
    for x in lst:
        if x % 2 != 0:
            oddArr.append(x)
            newArr.append('*')
        else:
            newArr.append(x)
    sortedOddArr = sorted(oddArr)
    newestArr= []
    for x in newArr:
        if x == '*':
            newestArr.append(sortedOddArr.pop(0))
        else:
            newestArr.append(x)
    return newestArr