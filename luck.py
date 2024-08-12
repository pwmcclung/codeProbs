import math
def luck_check(st):
    num_str = '0123456789'
    str_arr = list(st)
    for x in str_arr:
        if x not in num_str:
            raise Exception('Invalid Type')
    length = math.ceil(len(str_arr)/ 2)
    if len(str_arr) % 2 == 0:
        left = str_arr[0:length]
        right = str_arr[length:]
        left_sum = sum([int(x) for x in left])
        right_sum = sum([int(x) for x in right])
        if right_sum == left_sum:
            return True
        else:
            return False
    elif len(str_arr)  % 2 != 0:
        left = str_arr[0:length]
        right = str_arr[length+1:]
        left_sum = sum([int(x) for x in left])
        right_sum = sum([int(x) for x in right])
        if right_sum == left_sum:
            return True
        else:
            return False