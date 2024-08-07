 def numberGame(self, nums: List[int]) -> List[int]:
    new_array = []
    sorted_nums = sorted(nums)
    while len(sorted_nums) > 0:
        alice = sorted_nums.pop(0)
        bob = sorted_nums.pop(0)
        new_array.append(bob)
        new_array.append(alice)
    return new_array