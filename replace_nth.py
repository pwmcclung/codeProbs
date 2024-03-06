def replace_nth(text, n, old_value, new_value):
    arr = list(text)
    new_arr = []
    count = 0
    for x in range(len(arr)):
        if arr[x] != old_value:
            new_arr.append(arr[x])
        elif arr[x] == old_value:
            count += 1
            if count == n:
                new_arr.append(new_value)
                count = 0
            else:
                new_arr.append(arr[x])
    return ''.join(new_arr)