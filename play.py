def can_i_play(nt, st, et):
    ans = 0 <= (nt - st) % 24 < (et - st) % 24
    return ans