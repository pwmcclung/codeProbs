def heightChecker(self, heights: List[int]) -> int:
    newH = sorted(heights.copy())
    count = 0
    for x in range(len(heights)):
        if heights[x] != newH[x]:
            count += 1
    return count