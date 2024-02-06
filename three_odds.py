def threeConsecutiveOdds(self, arr: List[int]) -> bool:
    for x in range(len(arr)-2):
        if arr[x] % 2 != 0 and arr[x + 1] % 2 != 0 and arr[x+2] % 2 != 0:
            return True
    return False