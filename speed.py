import math
def reverse(seq): 
    count = 0
    neg_count = -1
    length = len(seq) / 2
    if len(seq) % 2 == 0:
        while count != length:
            seq[count], seq[neg_count] = seq[neg_count],seq[count]
            count += 1
            neg_count -= 1
        return seq
    if len(seq) % 2 != 0:
        length = math.ceil(length)
        while count != length:
            seq[count], seq[neg_count] = seq[neg_count],seq[count]
            count += 1
            neg_count -= 1
        return seq