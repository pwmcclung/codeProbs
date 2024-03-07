def common(a, b, c):
    sorted_a, sorted_b, sorted_c = sorted(a), sorted(b), sorted(c)
    i, j, k = 0,0,0
    length_a, length_b, length_c = len(a), len(b), len(c)
    sum = 0
    while i < length_a and j < length_b and k < length_c:
        if sorted_a[i] == sorted_b[j] and sorted_b[j] == sorted_c[k]:
            sum += sorted_a[i]
            i += 1
            j += 1
            k += 1
        elif sorted_a[i] < sorted_b[j]:
            i += 1
        elif sorted_b[j] < sorted_c[k]:
            j += 1
        else:
            k += 1
    return sum