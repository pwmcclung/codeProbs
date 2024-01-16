def gps(s, x):
    arr = []
    if len(x) <= 1:
        return 0
    for item in range(len(x)-1):
        arr.append( (x[item+1] - x[item]) * 3600 / s)
    biggest = max(arr)
    return biggest