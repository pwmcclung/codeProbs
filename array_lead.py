def array_leaders(numbers):
    ans_list = []
    while len(numbers) > 0:
        item = numbers.pop(0)
        if item > sum(numbers):
            ans_list.append(item)
    return ans_list