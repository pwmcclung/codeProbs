def reverse_fun(n):
    length = len(n)
    new_str = ''
    lst = list(n)
    while length > 0:
        lst.reverse();
        first = lst.pop(0)
        new_str += str(first)
        length -= 1
    return new_str