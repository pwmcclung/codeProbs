import math

def center(strng, width, fill=' '):
    if len(strng) >= width:
        return strng
    else:
        left = 0
        right = 0
        word = 0
        fill_amt = width - len(strng)
        if fill_amt %  2 == 0:
            left = fill_amt  // 2
            right = fill_amt // 2
            word = (fill * left) + strng + (fill * right)
            return word
        elif fill_amt % 2 != 0:
            left = math.ceil(fill_amt / 2)
            right = math.floor(fill_amt / 2)
            word = (fill * left ) + strng + (fill * right)
            return word
        