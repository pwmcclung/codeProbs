def add(lst):
    new_list = []
    summed = 0
    for x in range(len(lst)):
        summed += lst[x]
        new_list.append(summed)
    return new_list