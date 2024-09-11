def length_of_sequence(arr,n):
    if n not in arr:
        return 0
    first = arr.index(n)
    last = max(index for index, item in enumerate(arr) if item == n)
    new_list = arr[first:last+1]
    list_count = [x for x in new_list if x == n]
    if len(list_count) != 2:
        return 0
    else:
        return len(new_list)