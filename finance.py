def finance(n):
    sum = 0
    for i in range(0, n + 1):
        current_sum = (2 * i + 2 * i + (n - i)) * (n + 1 - i) / 2
        sum = sum + current_sum
    return sum