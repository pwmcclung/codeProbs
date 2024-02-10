from functools import reduce
def product_array(numbers):
    new_arr = []
    count = len(numbers)
    while count > 0:
        first = numbers.pop(0)
        new_arr.append(reduce(lambda x,y : x * y, numbers))
        numbers.append(first)
        count -= 1
    return new_arr