def sea_sick(sea):
    count_change = 0
    total = len(sea)
    for x in range(len(sea)-1):
        if sea[x] != sea[x+1]:
            count_change += 1
    perC = count_change / total
    if perC > 0.20:
        return 'Throw Up'
    else:
        return 'No Problem'