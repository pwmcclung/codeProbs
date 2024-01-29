def runningSum(self, nums: List[int]) -> List[int]:
    sum =0
    arr = []
    for x in range(len(nums)):
        sum+=nums[x]
        arr.append(sum)
    return arr