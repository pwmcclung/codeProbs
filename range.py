def solution(args):
    ans = []
    if args:
        temp = args[0]
        i = 0
        length = len(args)
        while i < length:
            temp = args[i]
            j = i
            while j < length - 1 and args[j+1] == args[j] + 1:
                j = j + 1
            if j - i > 1:
                temp = str(args[i]) + '-' + str(args[j])
                i = j + 1
            else:
                i = (j if j > i else i +1)
            ans.append(temp)
    return ','.join(str(x) for x in ans)