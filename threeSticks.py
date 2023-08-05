import math
def maxlen(L1,L2):
    smallone = min(L1,L2)
    bigone = max(L1,L2)
    if bigone > smallone * 3:
        return bigone / 3
    if smallone * 2 <= bigone:
        return smallone
    elif smallone > bigone/ 2:
        return bigone /2