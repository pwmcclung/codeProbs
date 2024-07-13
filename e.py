def find_e(s):
    if s == '':
        return s
    if type(s) != str:
        return None
    
    s_lower = s.lower()
    s_lower_arr = [x for x in s_lower if x == 'e']
    
    if len(s_lower_arr) == 0:
        return 'There is no "e".'
    else:
        return str(len(s_lower_arr))