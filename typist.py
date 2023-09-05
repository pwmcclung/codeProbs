def typist(s):
    capsLock = 0
    count = len(s)
    if s[0] == s[0].upper():
        capsLock += 1
    for ele in range(0, (len(s)-1)):
        if s[ele] == s[ele].lower() and s[ele+1] == s[ele+1].upper():
            capsLock += 1
        elif s[ele] == s[ele].upper() and s[ele+1] == s[ele+1].lower():
            capsLock += 1
            
    return count + capsLock