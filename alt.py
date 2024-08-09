def is_alt(s):
    # create three lists - cons and vowels and s
    cons = list('bcdfghjklmnpqrstvwxyz')
    vowels = list('aeiou')
    s_list = list(s)
    # create two empty lists = evens and odds
    evens = []
    odds = []
    # create two values to hold count
    evens_count = 0
    odds_count = 0
    # if first letter in s_list is a vowel, put all (hopefully vowels) in evens
    if s_list[0] in vowels:
        for x in range(len(s_list)):
            if x % 2 == 0:
                evens.append(s_list[x])
            if x % 2 != 0:
                odds.append(s_list[x])
        evens_count = len([x for x in evens if x not in vowels])
        odds_count = len([x for x in odds if x not in cons])
        if evens_count == 0 and odds_count == 0:
            return True
        else:
            return False
    # if first letter in s_list is a consonant, put all in evens
    if s_list[0] in cons:
        for x in range(len(s_list)):
            if x % 2 == 0:
                evens.append(s_list[x])
            if x % 2 != 0:
                odds.append(s_list[x])
        evens_count = len([x for x in evens if x not in cons])
        odds_count = len([x for x in odds if x not in vowels])
        if evens_count == 0 and odds_count == 0:
            return True
        else:
            return False