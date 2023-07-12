import math
def powerof4(n):
    if (n == 0):
        return False
    elif (type(n) != int):
        return False
    else:
        while (n != 1):
            if (n % 4 != 0):
                return False
            n = n // 4
    return True