def rotate(data, n):
    if n == 0 or data == []:
        return data
    elif n < 0:
        count = n
        while count < 0:
            first = data.pop(0)
            data.append(first)
            count += 1
        return data
    elif n > 0:
        count = n
        while count > 0:
            first = data.pop(-1)
            data.insert(0,first)
            count -= 1
        return data