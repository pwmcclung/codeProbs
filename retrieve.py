def solution(items, index, default_value):
    if abs(index) <= len(items):
        return items[index]
    else:
        return default_value