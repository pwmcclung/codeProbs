import math
def cook_pancakes(n, m):
    if n < m:
        return 2
    else:
        return math.ceil((n/m) * 2)