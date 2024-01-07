def averages(arr):
    if type(arr) == list and len(arr) > 0:
        arr2 = []
        for x in range(len(arr)-1):
            item = (arr[x] + arr[x+1])/2
            if item % 1 != 0:
                arr2.append(float(item))
            else:
                arr2.append(int(item))
        return arr2
    else:
        return []