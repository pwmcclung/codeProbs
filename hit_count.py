def counter_effect(hit_count):
    arr = list(hit_count)
    new_arr = []
    for x in range(len(arr)):
        new_arr.append(arr_maker(int(arr[x])))
    return new_arr

def arr_maker(num):
    arr = []
    number = 0
    while number <= num:
        arr.append(number)
        number += 1
    return arr