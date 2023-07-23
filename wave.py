def wave(people):
    if len(people) == 0:
        return []
    else:
        peopleToLowerCase = people.lower()
        lst = []
        for ele, idx in enumerate(people):
            if idx == ' ':
                continue
            else:
                wavePerson = peopleToLowerCase[:ele] + peopleToLowerCase[ele].upper() + peopleToLowerCase[ele + 1:]
                lst.append(wavePerson)
        return lst