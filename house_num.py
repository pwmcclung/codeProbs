def house_numbers_sum(inp):
    sum = 0
    for x in range(len(inp)):
        sum += inp[x]
        if inp[x] == 0:
            break
    return sum