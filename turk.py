def check_valid_tr_number(number):
    if not str(number).isdigit()  or len(str(number)) != 11:
        return False
    num_list = [int(x) for x in str(number)]
    if num_list[0] == 0:
        return False
    end_part = num_list[-2:]
    first_part = num_list[:-2]
    eves = []
    odds = []
    count = 0
    while count < len(first_part):
        if count % 2 != 0:
            odds.append(first_part[count])
        else:
            eves.append(first_part[count])
        count += 1
    a = sum(eves) * 7
    b = a - sum(odds)
    mod_b = b % 10
    num_sum = sum(num_list[0:-1]) % 10
    if mod_b == end_part[0] and num_sum == end_part[-1]:
        return True
    else:
        return False