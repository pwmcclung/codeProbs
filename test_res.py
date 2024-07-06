def test(r):
    avg = round((sum(r)/len(r)), 3)
    test_dict = {'h':0, 'a':0, 'l':0}
    for x in r:
        if x > 8:
            test_dict['h'] += 1
        elif x > 6:
            test_dict['a'] += 1
        else:
            test_dict['l'] += 1
    if test_dict['h'] == len(r):
        return [avg, test_dict, 'They did well']
    else:
        return [avg, test_dict]
    