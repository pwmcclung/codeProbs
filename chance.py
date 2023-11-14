def get_chance(n, x, a):
    chance_occurring = 1
    while a > 0:
        chance_occurring = (n-x) / n * chance_occurring
        n -= 1
        a -= 1
    return round(chance_occurring * 100) / 100