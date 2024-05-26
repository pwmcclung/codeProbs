def rotate(str_):
    arr = list(str_)
    count = 0
    new_arr = []
    while count < len(arr):
        first = arr.pop(0)
        arr.append(first)
        new_word = ''.join(arr)
        new_arr.append(new_word)
        count += 1
    return new_arr
