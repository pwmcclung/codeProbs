def sum_of_n(n):
    arr = [0]
    sum = 0
    if n > 0:
        count = 1
        while count <= n:
            sum += count
            arr.append(sum)
            count += 1
    elif n < 0:
        count = -1
        while count >= n:
            sum += count
            arr.append(sum)
            count -= 1
    return arr