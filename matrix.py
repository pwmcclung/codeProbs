
def getMatrixProduct(a, b):
    """If a and b can be multiplied, returns the product of a and b as a two-dimensional array. Otherwise returns -1."""
    if len(a[0]) != len(b):
        return -1
    aIndex = 0
    result = []
    temp = []
    while aIndex < len(a):
        bColumn = 0
        while bColumn < len(b[0]):
            r = 0
            indexAct = 0
            while indexAct < len(a[0]):
                r += a[aIndex][indexAct] * b[indexAct][bColumn]
                indexAct += 1
            temp.append(r)
            bColumn += 1
        result.append(temp)
        temp = []
        aIndex += 1
    return result