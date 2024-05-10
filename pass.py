import re
def password(string):
    big = re.findall(r'[A-Z]', string)
    little = re.findall(r'[a-z]', string)
    number = re.findall(r'\d+', string)
    if len(string) < 8:
        return False
    else:
        if len(big) > 0 and len(little) > 0 and len(number) > 0:
            return True
        else:
            return False