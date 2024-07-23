def similarity(a, b):
    inBoth = [i for i in a if i in b]
    both = a + b
    lstBoth = list(set(both))
    return len(inBoth) / len(lstBoth)