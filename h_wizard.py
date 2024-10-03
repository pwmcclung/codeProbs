def haiku_wizard(arr):
    string = []
    new_str = []
    for x in arr:
        count = 0
        for y in x:
            string.append(h_lookup(y))
            count += 1
            if count == len(x):
                string = ' '.join(string)
                new_str.append(string)
                string = []
                count = 0
    newer_str =  '\n'.join(new_str)
    return newer_str
def h_lookup(num):
    l_num = [int(x) for x in str(num)]
    return words[l_num[0]-1][l_num[1]]