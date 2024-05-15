def match_arrays(v, r):
    count = 0
    for x in v:
        if x in r:
            count += 1
    return count