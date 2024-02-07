def smaller(arr):
    new_arr = []
    count = 0
    while len(arr) > 0:
        first = arr.pop(0)
        for x in range(len(arr)):
            if first > arr[x]:
                count += 1
        new_arr.append(count)
        count = 0
    return new_arr