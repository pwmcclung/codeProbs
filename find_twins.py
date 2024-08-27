def elimination(arr):
    duplicates = []
    seen = set()
    for item in arr:
        if item in seen:
            duplicates.append(item)
        else:
            seen.add(item)
    if len(duplicates) > 0:
        return duplicates[0]
    else:
        return None