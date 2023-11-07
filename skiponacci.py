def skiponacci(n):
    #establish an array and variables
    newArr = []
    first = 0
    second = 1
    third = 0
    count = 0
    # use a while loop to create the fibonacci sequence
    while count <= n:
        newArr.append(third)
        count += 1
        first = second
        second = third
        third = first + second
    # remove the first element
    newArr = newArr[1:]
    # new array for the next part
    arr = []
    newCount = 0
    for x in newArr:
        if newCount % 2 == 0:
            arr.append(str(x))
        else:
            arr.append('skip')
        newCount += 1
    return ' '.join(arr)