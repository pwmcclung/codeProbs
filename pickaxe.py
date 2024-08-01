import math
def stone_pick(arr):
    handle = 0
    head = 0
    for x in arr:
        if x  == 'Sticks':
            handle += 1
        if x == 'Wood':
            handle += 4
        if x == 'Cobblestone':
            head += 1
    ttl_heads = round(head//3)
    ttl_handles = round(handle//2)
    pick_axes = 0
    if ttl_heads == 0 or ttl_handles == 0:
        return 0
    else:
        while ttl_heads >=1 and ttl_handles >=1:
            ttl_heads -= 1
            ttl_handles -= 1
            pick_axes += 1        
    return math.floor(pick_axes)