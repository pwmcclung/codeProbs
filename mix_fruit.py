def mix_fruit(arr):
    arr2 = []
    for x in arr:
        arr2.append(x.lower())
    costs = 0
    for x in arr2:
        if x == 'banana' or x == 'orange' or x == 'apple' or x == 'lemon' or x == 'grapes':
            costs = costs + 5
        elif x == 'avocado' or x == 'strawberry' or x == 'mango':
            costs = costs + 7
        else:
            costs = costs + 9
    mean = costs / len(arr2)
    return int(round(mean, 0))