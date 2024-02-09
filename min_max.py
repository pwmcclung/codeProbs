 def findNonMinOrMax(self, nums: List[int]) -> int:
    sorted_nums = sorted(nums)
    if len(sorted_nums) > 2:
        return sorted_nums[1]
    else:
        return -1