def convert_lojban(lojban):
    num_list = list(map(''.join, zip(*[iter(lojban)]*2)))
    num_dict = {'pa':'1', 're':'2','ci':'3', 'vo':'4', 'mu':'5', 'xa':'6','ze':'7','bi':'8', 'so':'9', 'no':'0'}
    num = ''
    for x in num_list:
        num += num_dict[x]
    return int(num)