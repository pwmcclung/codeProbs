def solve(n):
    count = 0
    while n >= 500:
        count += 1
        n -= 500
    while n >= 200:
        count += 1
        n -= 200
    while n >= 100:
        count += 1
        n -= 100
    while n >= 50:
        count += 1
        n -= 50
    while n >= 20:
        count += 1
        n -= 20
    while n >= 10:
        count += 1
        n -= 10
    if n == 0:
        return count
    else:
        return -1