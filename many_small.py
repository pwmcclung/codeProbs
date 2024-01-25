def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
    length = len(nums)
    count_arr = []
    sum = 0
    while length > 0:
        first = nums.pop(0)
        for x in range(len(nums)):
            if first > nums[x]:
                sum += 1
        count_arr.append(sum)
        nums.append(first)
        sum = 0
        length -= 1
    return count_arr