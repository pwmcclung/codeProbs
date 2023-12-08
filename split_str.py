def string_to_int_list(s):
    list = s.split(",")
    arr = []
    for x in list:
        if x != '':
            arr.append(int(x))
    return arr
    