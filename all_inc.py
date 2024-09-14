def contain_all_rots(strng, arr):
    if strng == '' or arr == []:
        return true
    arr_filt = [x for x in arr if len(x) == len(strng)]
    new_arr = []
    count = 0
    new_str = list(strng)
    while count != len(strng):
        first = new_str.pop(0)
        new_str.append(first)
        word = ''.join(new_str)
        new_arr.append(word)
        count+=1
    arr1 = [x for x in new_arr if x not in arr_filt]
    if len(arr1) > 0:
        return False
    else:
        return True