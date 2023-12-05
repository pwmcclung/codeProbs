def leader_b(user, user_score, your_score):
    needed = user_score - your_score
    baytah = needed // 3
    ateQ = ( needed - baytah * 3)
    if your_score >user_score:
        return 'Winning!'
    elif your_score == user_score:
        return 'Only need one!'
    else:
        if baytah + ateQ > 1000:
            return "To beat {}'s score, I must complete {} Beta kata and {} 8kyu kata. Dammit!".format(user, baytah, ateQ)
        else:
            return "To beat {}'s score, I must complete {} Beta kata and {} 8kyu kata.".format(user, baytah, ateQ)