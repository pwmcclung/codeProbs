def defangIPaddr(self, address: str) -> str:
    newStr = ''
    for x in address:
        if x == '.':
            newStr += '[.]'
        else:
            newStr += x
    return newStr