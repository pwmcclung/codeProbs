def to_12_hour_time(time_string):
    pass
    # The timestring will always be four digits using
    # "hhmm" format.
    # return 'h:mm am' or 'h:mm pm'
    hour = int(time_string[:2])
    min = str(time_string[2:])
    new_hour = 1
    match hour:
        case 0:
            return '12:{b} am'.format(b=min)
        case 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11:
            return '{a}:{b} am'.format(a=hour,b=min)
        case 12:
            return '{a}:{b} pm'.format(a=hour,b=min)
        case 13:
            return '{a}:{b} pm'.format(a=new_hour,b=min)
        case 14:
            return '{a}:{b} pm'.format(a=new_hour + 1,b=min)
        case 15:
            return '{a}:{b} pm'.format(a=new_hour + 2,b=min)
        case 16:
            return '{a}:{b} pm'.format(a=new_hour + 3,b=min)
        case 17:
            return '{a}:{b} pm'.format(a=new_hour + 4,b=min)
        case 18:
            return '{a}:{b} pm'.format(a=new_hour + 5,b=min)
        case 19:
            return '{a}:{b} pm'.format(a=new_hour + 6,b=min)
        case 20:
            return '{a}:{b} pm'.format(a=new_hour + 7,b=min)
        case 21:
            return '{a}:{b} pm'.format(a=new_hour + 8,b=min)
        case 22:
            return '{a}:{b} pm'.format(a=new_hour + 9,b=min)
        case 23:
            return '{a}:{b} pm'.format(a=new_hour + 10,b=min)
        case 24:
            return '{a}:{b} pm'.format(a=new_hour + 11,b=min)
