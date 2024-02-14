def pairs(arr):
    if len(arr) % 2 != 0:
        arr.pop(-1)
    count = 0
    while len(arr) > 0:
        first = arr.pop(0)
        second = arr.pop(0)
        biggest = max(first, second)
        smallest = min(first, second)
        if biggest - smallest == 1:
            count += 1
    return count