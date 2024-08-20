import math
def get_new_notes(salary,bills):
    bills_sum = sum(bills)
    left_over = salary - bills_sum
    if left_over > 0:
        return math.floor(left_over / 5)
    else:
        return 0