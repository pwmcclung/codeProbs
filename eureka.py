from functools import reduce
from operator import add

def sum_dig_pow(a, b): # range(a, b + 1) will be studied by the function
    count_start = a
    new_list = []
    while count_start <= b:
        if count_start < 10:
            new_list.append(count_start)
        else:
            new_list.append(num_tester(count_start))
        count_start += 1
    new_list = [i for i in new_list if i > 0]
    return new_list
    
def num_tester(n):
    split_nums = [int(i) for i in str(n)]
    num_arr = []
    spot = 1
    for x in range(len(split_nums)):
        num_arr.append(split_nums[x] **spot)
        spot += 1
    if reduce(add, num_arr) == n:
        return n
    else:
        return 0
