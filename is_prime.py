import math
def total(arr):
    sum = 0
    for i in range(len(arr)):
        if is_prime(i):
            sum += arr[i]
    return sum
    
def is_prime(n, i=2):
    if n <= 2:
        return n == 2
    if n % i == 0:
        return False
    if i * i > n:
        return True
    return is_prime(n, i + 1)