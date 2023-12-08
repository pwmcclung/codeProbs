import math
2
def traffic_count(array):
3
    fourPm = max(array[0:6])
4
    fivePm = max(array[6:12])
5
    sixPm = max(array[12:18])
6
    sevenPm = max(array[18:])
7
    timeList = ['4:00pm','5:00pm', '6:00pm', '7:00pm']
8
    return  [(timeList[0], fourPm),(timeList[1], fivePm),(timeList[2], sixPm),(timeList[3], sevenPm)]