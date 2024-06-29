def bear_dollars(jobs):
    close_friend_dollars = 0
    acquaintance_dollars = 0
    friend_dollars = 0
    reg_dollas = 0
    for x in range(0,len(jobs)):
        choice = str(jobs[x][1]).lower()
        if choice == "close friend":
            close_friend_dollars += jobs[x][0] * 25
        elif  choice == "acquaintance":
            acquaintance_dollars += jobs[x][0] * 100  
        elif choice == "friend":
            friend_dollars += jobs[x][0] * 50 
        else:
            reg_dollas += jobs[x][0] * 125
    monies_earned = close_friend_dollars + acquaintance_dollars + friend_dollars + reg_dollas
    return monies_earned