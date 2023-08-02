def remove_chars(s):
    lst = list(s)
    arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']
    print(len(arr))
    newArr = []
    for x in lst:
        if x in arr:
            newArr.append(x)
    return ''.join(newArr)