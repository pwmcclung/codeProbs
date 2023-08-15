def amicable_numbers(n1,n2):
    if find_div(n1) == n2 and find_div(n2) == n1:
        return True
    else:
        return False
    
    
def find_div(num):
    arr = []
    i = 1
    while i < num:
        if num % i == 0:
            arr.append(i)
        i = i + 1
    total = sum(arr)
    return total