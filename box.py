def box(n):
    new_box = []
    count = 1
    first = '-' * n
    last = '-' * n
    new_box.append(first)
    while count < n-1:
        new_str = '-' + (' ' * (n-2)) + '-'
        new_box.append(new_str)
        count += 1
        new_str = ''
    new_box.append(last)
    return new_box