import math

def find_next_square(sq):
    sqr = math.sqrt(sq)
    if sqr % 1 != 0:
        return -1
    newSqr = math.floor(sqr) + 1
    return newSqr * newSqr

