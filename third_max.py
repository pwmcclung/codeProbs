def thirdMax(self, nums: List[int]) -> int:
    list_set = sorted(list(set(nums)))
    if len(list_set) > 2:
        return list_set[-3]
    else:
        return list_set[-1]