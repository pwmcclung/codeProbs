def strong_num(number):
    num = [int(i) for i in str(number)]
    sum = 0
    for x in num:
        sum += fact(x)
    
    if sum == number:
        return "STRONG!!!!"
    
    else:
        return "Not Strong !!"



def fact(num):
    result = num
    if num == 0 or num == 1:
        return 1
    while num > 1:
        num = num - 1
        result = result * num
        
    return result