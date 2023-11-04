def triangular(n):
    if n <= 0:
        return 0
    else:
        return int(n * ( n + 1) // 2)