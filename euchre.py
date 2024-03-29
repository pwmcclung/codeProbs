def update_score(current_score, called_trump, alone, tricks):
    team_1_score = current_score[0]
    team_2_score = current_score[1]
    
    score_count_1 = 0
    score_count_2 = 0
    for x in range(len(tricks)):
        if tricks[x] == 1:
            score_count_1 += 1
        else:
            score_count_2 += 1
    
    if called_trump == 1:
        if score_count_1  <= 2:
            team_2_score += 2
        elif score_count_1  < 5 and score_count_1 > 2:
            team_1_score += 1
        elif score_count_1 == 5 and alone == True:
            team_1_score += 4
        elif score_count_1 == 5 and alone == False:
            team_1_score += 2
            
    if called_trump == 2:
        if score_count_2 <= 2:
            team_1_score += 2
        elif score_count_2 < 5 and score_count_2 > 2:
            team_2_score += 1
        elif score_count_2 == 5 and alone == True:
            team_2_score += 4
        elif score_count_2 == 5 and alone == False:
            team_2_score += 2
            
    return [team_1_score, team_2_score]