def separateDigits(self, nums: List[int]) -> List[int]:
    str_arr = [str(x)for x in nums]
    new_str = ''.join(str_arr)
    num_arr = []
    for x in new_str:
        num_arr.append(int(x))
    return num_arr