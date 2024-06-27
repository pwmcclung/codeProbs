import re
def nothing_special(st):
    if type(st) is not str:
        return 'Not a string!'
    return re.sub(r'[^a-zA-Z0-9\s]+', '', st)