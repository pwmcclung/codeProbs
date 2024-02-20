def count_arara(n):
    odd = 'anane'
    even = 'adak'
    count_arr = []
    if n > 0:
        for i in range(1, n+1):
            if i % 2 == 0:
                count_arr.append(even)
            if i % 2 != 0 and i == n:
                count_arr.append(odd)
    return ' '.join(count_arr)