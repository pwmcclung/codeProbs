from math import gcd
def how_many(m, x):
    if m < 0:
        return 0
    x = x.split(' ')
    first = int(x[0])
    and_or = x[1]
    second = int(x[2])
    divis_first = int(m/first)
    divis_second = int(m/second)
    LCM = int((first * second) / gcd(first,second))
    divis_LCM = int(m/LCM)
    divis_first_or_second = ((divis_first + divis_second) - divis_LCM)
    if and_or == 'and':
        return divis_LCM
    elif and_or == 'or':
        return divis_first_or_second