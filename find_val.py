def finalValueAfterOperations(self, operations: List[str]) -> int:
    count = 0
    for x in operations:
        if '--' in x:
            count -= 1
        elif '++' in x:
            count += 1
    return count