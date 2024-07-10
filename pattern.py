def pattern(n):
    if n < 1:
        return ''
    if n % 2 == 0:
        n = n - 1
    arr = []
    count = 1
    format = ''
    while count <= n:
        format += str(count)
        format = str(format) * count
        arr.append(format)
        arr.append('\n')
        format = ''
        count += 2  
    return ''.join(arr[:-1])