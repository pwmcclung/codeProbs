def findFinalValue(self, nums: List[int], original: int) -> int:
    found = True
    while found == True:
        if original in nums:
            original = original * 2
        else:
            found == False
            break
    return original