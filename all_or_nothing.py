def possibly_perfect(key, answers):
    correct = 0
    wrong = 0
    unknown = 0
    for x in range(len(answers)):
        if key[x] == answers[x]:
            correct += 1
        elif key[x] == '_':
            unknown += 1
        else:
            wrong += 1
    if (correct + unknown) == len(answers) or (wrong + unknown) == len(answers):
        return True
    else:
        return False
    