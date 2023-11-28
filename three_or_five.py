def solution(number):
    if number < 0:
        return 0
    else:
        arr = []
        count = 0
        while count < number:
            if count % 3 == 0 or count % 5 == 0:
                arr.append(count)
            count += 1
    return sum(arr)
  