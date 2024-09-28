
from collections import Counter

def numIdenticalPairs(self, nums: List[int]) -> int:
    count_of_good_pairs = 0
    times = Counter()
    for number in nums:
        count_of_good_pairs  += times[number]
        times[number] += 1
    return count_of_good_pairs