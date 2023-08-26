
# the long method
def area_code(text):
    firstOne = text.find('(')
    first = text[firstOne + 1]
    second = text[firstOne + 2]
    third = text[firstOne + 3]
    lst = [first,second,third]
    return ''.join(lst)