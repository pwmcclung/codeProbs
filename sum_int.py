def sum_of_intervals(intervals):
    total = 0
    int_sort = sorted(intervals)
    slice_one = int_sort[0][0]
    slice_two = int_sort[0][1]
    total += slice_two - slice_one
    if len(set(int_sort)) == 1:
        return total
    else:
        for x in int_sort[1:]:
            if x[0] > slice_two:
                total += x[1] - x[0]
                slice_one = x[0]
                slice_two = x[1]
            elif x[0] >= slice_one and x[1] <= slice_two:
                continue
            else:
                total += x[1] - slice_two
                slice_two = x[1]
    return total