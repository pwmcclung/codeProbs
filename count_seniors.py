def countSeniors(self, details: List[str]) -> int:
    arr = []
    for x in range(len(details)):
        age = details[x][11:13]
        arr.append(int(age))
    return len([x for x in arr if x > 60])