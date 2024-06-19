def convert_temp(temp, from_scale, to_scale):
    # 1
    if from_scale == 'C' and to_scale == 'F':
        return  int(temp * (9/5) + 32)
    if from_scale == 'C' and to_scale == 'K':
        return int(temp + 273.15)
    if from_scale == 'C' and to_scale == 'R':
        return int((temp + 273.15) * (9/5))
    if from_scale == 'C' and to_scale == 'De':
        return int((100 - temp) * (3/2))
    if from_scale == 'C' and to_scale == 'N':
        return int(temp * (33/100))
    if from_scale == 'C' and to_scale == 'Re':
        return int( temp * (4/5))
    if from_scale == 'C' and to_scale == 'Ro':
        return int((temp * (21 / 40)) + 7.5)
    if from_scale == 'C' and to_scale == 'C':
        return temp
    # 2
    if from_scale == 'F' and to_scale == 'C':
        return int((temp - 32) * (9/5))
    if from_scale == 'F' and to_scale == 'K':
        return int((temp + 459.67) * ( 5 / 9))
    if from_scale == 'F' and to_scale == 'R':
        return int(temp + 459.67) 
    if from_scale == 'F' and to_scale == 'De':
        return int((212 - temp) * (5/6))
    if from_scale == 'F' and to_scale == 'N':
        return int((temp - 32) * (11/60))
    if from_scale == 'F' and to_scale == 'Re':
        return int((temp - 32) * (4/9))
    if from_scale == 'F' and to_scale == 'Ro':
        return int(((temp - 32) * (7/24)) + 7.5)
    if from_scale == 'F' and to_scale == 'F':
        return temp
    #3
    if from_scale == 'K' and to_scale == 'C':
        return int(temp - 273.15)
    if from_scale == 'K' and to_scale == 'F':
        return int((temp * 9/5)- 459.67)
    if from_scale == 'K' and to_scale == 'R':
        return int(temp * (9/5))
    if from_scale == 'K' and to_scale == 'De':
        return int((373.15 - temp) * ( 3 /2 ))
    if from_scale == 'K' and to_scale == 'N':
        return int( (temp - 273.15) * (33/100))
    if from_scale == 'K' and to_scale == 'Re':
        return int((temp - 273.15) * (4/5))
    if from_scale == 'K' and to_scale == 'Ro':
        return int(((temp - 273.15) * (21 / 40)) + 7.5)
    if from_scale == 'K' and to_scale == 'K':
        return temp
    #4
    if from_scale == 'R' and to_scale == 'C':
        return int((temp - 491.67) * ( 5/9))
    if from_scale == 'R' and to_scale == 'F':
        return int( temp - 459.67)
    if from_scale == 'R' and to_scale == 'K':
        return int(temp * (5/9))
    if from_scale == 'R' and to_scale == 'De':
        r_far = temp - 459.67 
        return int( (212 - r_far) * (5/6))
    if from_scale == 'R' and to_scale == 'N':
        r_far = temp - 459.67 
        return int((r_far - 32) * (11/60))
    if from_scale == 'R' and to_scale == 'Re':
        return int((temp - 491.67 ) * ( 4/9))
    if from_scale == 'R' and to_scale == 'Ro':
        return int( ((temp - 491.67) * (7/24)) + 7.5)
    if from_scale == 'R' and to_scale == 'R':
        return temp
    #5
    if from_scale == 'De' and to_scale == 'C':
        return int(100 - (temp * ( 2/3)))
    if from_scale == 'De' and to_scale == 'F':
        return int(212 - (temp * (6/5)))
    if from_scale == 'De' and to_scale == 'K':
        return int(373.15 - ( temp * (2/3)))
    if from_scale == 'De' and to_scale == 'R':
        return int(671.67 - ( temp * (6 / 5)))
    if from_scale == 'De' and to_scale == 'N':
        de_farh = ((212 - (temp * (6/5))))
        return int((de_farh - 32)* (11/60))
    if from_scale == 'De' and to_scale == 'Re':
        de_farh = ((212 - (temp * (6/5))))
        return int((de_farh - 32) * ( 4/9))
    if from_scale == 'De' and to_scale == 'Ro':
        de_farh = ((212 - (temp * (6/5))))
        return int(((de_farh - 32) * (7/24)) + 7.5)
    if from_scale == 'De' and to_scale == 'De':
        return temp
    # 6
    if from_scale == 'N' and to_scale == 'C':
        return int((temp * (100/33)))
    if from_scale == 'N' and to_scale == 'F':
        return int((temp* ( 60 / 11))+ 32)
    if from_scale == 'N' and to_scale == 'K':
        return int((temp * (100/33))+ 273.15)
    if from_scale == 'N' and to_scale == 'De':
        n_far = ((temp * (60/11)) + 32)
        return int( (212 - n_far) * (5/6))
    if from_scale == 'N' and to_scale == 'R':
        return int(((60/11) * temp) + 491.67)
    if from_scale == 'N' and to_scale == 'Re':
        n_far = ((temp * (60/11)) + 32)
        return int((n_far - 32) * ( 4/9))
    if from_scale == 'N' and to_scale == 'Ro':
        n_far = ((temp * (60/11)) + 32)
        return int( ((n_far - 32) * (7 / 24)) + 7.5)
    if from_scale == 'N' and to_scale == 'N':
        return temp
    # 7
    if from_scale == 'Re' and to_scale == 'C':
        return int(temp * (5/4))
    if from_scale == 'Re' and to_scale == 'F':
        return int((temp * (9/4)) + 32)
    if from_scale == 'Re' and to_scale == 'K':
        return int((temp * (5/4)) + 273.15)
    if from_scale == 'Re' and to_scale == 'De':
        re_far = ((temp * ( 9/4)) + 32)
        return int((212 - re_far) * ( 5/ 6))
    if from_scale == 'Re' and to_scale == 'N':
        re_far = ((temp * ( 9/4)) + 32)
        return int((re_far - 32) * ( 11/60))
    if from_scale == 'Re' and to_scale == 'R':
        return int((temp * (9/4)) + 491.67)
    if from_scale == 'Re' and to_scale == 'Ro':
        re_far = ((temp * ( 9/4)) + 32)
        return int( ((re_far - 32) * (7/24)) + 7.5)
    if from_scale == 'Re' and to_scale == 'Re':
        return temp
    #8
    if from_scale == 'Ro' and to_scale == 'C':
        return int((temp - 7.5) * (40/21))
    if from_scale == 'Ro' and to_scale == 'F':
        return int(((temp - 7.5)* (24/7))+ 32)
    if from_scale == 'Ro' and to_scale == 'K':
        return int(((temp -7.5) * (40/21)) + 273.15)
    if from_scale == 'Ro' and to_scale == 'De':
        ro_far = ((temp - 7.5)* (24/7))+ 32
        return int((212 - ro_far) * (5/6))
    if from_scale == 'Ro' and to_scale == 'N':
        ro_far = ((temp - 7.5)* (24/7))+ 32
        return int((ro_far - 32) * ( 11/60))
    if from_scale == 'Ro' and to_scale == 'Re':
        ro_far = ((temp - 7.5)* (24/7))+ 32
        return int((ro_far - 32) * ( 4/ 9))
    if from_scale == 'Ro' and to_scale == 'R':
        return int(((temp - 7.5) * (24/7))+ 491.67)
    if from_scale == 'Ro' and to_scale == 'Ro':
        return temp