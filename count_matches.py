def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
    count = 0
    for x in range(len(items)):
        if ruleKey == 'type' and ruleValue == items[x][0]:
            count += 1
        elif ruleKey == 'color' and ruleValue == items[x][1]:
            count += 1
        if ruleKey == 'name' and ruleValue == items[x][2]:
            count += 1
    return count