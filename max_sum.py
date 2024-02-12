def maximizeSum(self, nums: List[int], k: int) -> int:
    count = 0
    sum = 0
    maximum = max(nums)
    while count < k:
        sum += maximum
        maximum += 1
        count += 1
    return sum