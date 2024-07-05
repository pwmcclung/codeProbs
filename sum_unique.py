def sumOfUnique(self, nums: List[int]) -> int:
    return sum([ele for ele in nums if nums.count(ele) <= 1])