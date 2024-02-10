def differenceOfSum(self, nums: List[int]) -> int:
    element_sum = sum(nums)
    strDig = ''.join([str(x) for x in nums])
    dig_sum = sum([int(x) for x in strDig])
    return abs(element_sum - dig_sum)