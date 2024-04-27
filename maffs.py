def number_property(n):
    return [is_prime(n), is_even(n), mult_ten(n)]

def is_prime(num):
    if num <= 1:
        return False
    if num <=3:
        return True
    if num % 2 == 0 or num % 3 == 0:
        return False
    i = 5
    while i * i <= num:
        if num % i == 0 or num % (i + 2) == 0:
            return False
        i += 6
    return True

def is_even(num):
    if num % 2 == 0:
        return True
    else:
        return False

def mult_ten(num):
    if num % 10 == 0:
        return True
    else:
        return False