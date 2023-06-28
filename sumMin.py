def sum_of_minimums(numbers):
    newList = []
    for x in numbers:
        newList.append(min(x))    
    return sum(newList)