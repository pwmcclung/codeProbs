def add_check_digit(number):
    num_list = [int(x) for x in number]
    check = []
    num = 2
    while len(check) < len(num_list):
        check.insert(0, num)
        num += 1
        if num == 8:
            num = 2
    pro_sum = (sum([x*y for x,y in zip(num_list,check)])) % 11;
    print(pro_sum)
    if pro_sum == 0:
        number = number + str(pro_sum)
    elif pro_sum == 1:
        number = number + 'X'
    else:
        checkD = 11 - pro_sum
        number = number + str(checkD)
    return number