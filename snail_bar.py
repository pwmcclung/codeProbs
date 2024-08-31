def can_snail_reach_end(length, speed, length_increases):
    if length_increases >= speed:
        return False
    get_there = length / (speed - length_increases)
    if get_there <= 525600:
        return True
    else:
        return False