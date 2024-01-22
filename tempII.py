def close_to_zero(t):
    if t == '':
        return 0
    t_arr = t.split(' ')
    t_arr_int = list((map(int, t_arr)))
    if 0 in t_arr_int:
        return 0
    if t_arr_int[0] != 0:
        t_arr_int.append(0)
        new_arr =sorted(t_arr_int) 
    if new_arr[-1] == 0:
        return new_arr[-2]
    else:
        one = new_arr[new_arr.index(0)-1]
        two = new_arr[new_arr.index(0)+1] 
        if abs(one) < abs(two):
            return one
        if abs(two) < abs(one):
            return two
        else:
            return two
    