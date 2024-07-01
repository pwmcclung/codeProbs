def vowel_shift(text,n):
    if n == 0:
        return text
    vowels = ['a', 'e','i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    arr = list(text)
    vowels_arr = []
    for x in range(0,len(arr)):
        if arr[x] in vowels:
            vowels_arr.append(arr[x])
            arr[x] = '*'
    if n > 0:
        count = 0
        while count < n and len(vowels_arr) > 0:
            first = vowels_arr.pop()
            vowels_arr.insert(0,first)
            count += 1
    if n < 0:
        count = n
        while  count < 0 and len(vowels_arr) > 0:
            first = vowels_arr.pop(0)
            vowels_arr.append(first)
            count += 1
    for x in range(0, len(arr)):
        if arr[x] == '*' and len(vowels_arr) > 0:
            arr[x] = vowels_arr.pop(0)
    return ''.join(arr)