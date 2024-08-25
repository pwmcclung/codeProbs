def array_mash(a, b):
    c = []
    for x in range(len(a)):
        c.append(a[x])
        c.append(b[x])
    return c