def pattern(n):
    pat = ['1\n']
    count = 2
    if n == 1:
        return '1'
    else:
        while count <= n:
            numStars = (count - 1)
            stars = numStars * '*'
            pat.append(f"1{stars}{count}\n")
            count += 1
    newStr = ''
    newStr = newStr.join(pat).rstrip()
    return newStr