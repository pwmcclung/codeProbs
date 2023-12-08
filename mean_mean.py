def get_mean(arr,x,y):
    if x <= 1 or x > len(arr) or y <= 1 or y > len(arr):
        return -1
    first = arr[0:x]
    second = arr[-y:]
    firstMean = sum(first) / len(first)
    secondMean = sum(second) / len(second)
    totalMean = (firstMean + secondMean) / 2
    return totalMean