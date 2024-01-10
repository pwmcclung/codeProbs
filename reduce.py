def reduce_fraction(fraction):
    minny = min(fraction)
    arr = []
    x = 1
    while x <= minny:
        if fraction[0] % x == 0  and fraction[1] % x == 0:
            arr.append(x)
        x += 1
    biggest = arr[-1]
    times1 = fraction[0] // biggest
    times2 = fraction[1] // biggest
    return (times1,times2)