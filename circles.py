import math
def sum_circles(*args):
    sum = 0
    for arg in args:
        sum += (math.pi * arg**2)/4
    return "We have this much circle: {}".format(round(sum))