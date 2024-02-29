def solution(number):
    mod_both, mod_three, mod_five = 0,0,0
    start = 1
    while start < number:
        if start % 3 == 0 and start % 5 == 0:
            mod_both += 1
        elif start % 3 == 0 and start % 5 != 0:
            mod_three += 1
        elif start % 3 != 0 and start % 5 == 0:
            mod_five += 1
        start += 1
    return [mod_three, mod_five, mod_both]