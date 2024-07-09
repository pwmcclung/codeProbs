def even_odd(arr):
    count,sum = 0,0
    for x in range(len(arr)):
        if count % 2 == 0:
            sum += arr[x]
            count += 1
        elif count % 2 != 0:
            sum *= arr[x]
            count += 1
    return sum