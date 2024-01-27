def add(s1, s2):
    s1 = sum(list(s1.encode('ascii')))
    s2 = sum(list(s2.encode('ascii')))
    return s1 + s2