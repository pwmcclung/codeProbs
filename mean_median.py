import math
import functools
def mean_vs_median(numbers):
    new_nums = sorted(numbers)
    length = len(numbers)
    mean  = ((functools.reduce(lambda a, b: a + b, numbers)) / length)
    mid_point = math.floor(length /2)
    median = new_nums[mid_point]
    if (median == mean):
        return 'same'
    elif median > mean:
        return 'median'
    elif mean > median:
        return 'mean'