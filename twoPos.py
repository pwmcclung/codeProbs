def two_are_positive(a, b, c):
    arr = [a,b,c]
    count = 0
    for x in arr:
        if x > 0:
            count += 1
    if count == 2:
        return True
    else:
        return False
    